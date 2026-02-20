import Map "mo:core/Map";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize authorization system state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
    email : Text;
    medicalId : Text;
    createdAt : Time.Time;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // Allow any authenticated principal (including guests) to save their profile
  // This is needed for initial registration after Internet Identity authentication
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (caller.isAnonymous()) {
      Runtime.trap("Unauthorized: Anonymous users cannot save profiles");
    };

    userProfiles.add(caller, profile);
  };

  // Users can retrieve their own profile
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };

    userProfiles.get(caller);
  };

  // Users can view their own profile, admins can view any profile
  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };

    userProfiles.get(user);
  };

  // Legacy function for backward compatibility - allows authenticated users to register
  public shared ({ caller }) func registerUser(name : Text, email : Text, medicalId : Text) : async () {
    if (caller.isAnonymous()) {
      Runtime.trap("Unauthorized: Anonymous users cannot register");
    };

    if (userProfiles.containsKey(caller)) {
      Runtime.trap("User already exists");
    };

    let profile : UserProfile = {
      name;
      email;
      medicalId;
      createdAt = Time.now();
    };

    userProfiles.add(caller, profile);
  };

  // Users can update their own profile
  public shared ({ caller }) func updateProfile(name : Text, email : Text, medicalId : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update profiles");
    };

    switch (userProfiles.get(caller)) {
      case (null) { Runtime.trap("User profile not found") };
      case (?existingProfile) {
        let updatedProfile : UserProfile = {
          name;
          email;
          medicalId;
          createdAt = existingProfile.createdAt;
        };
        userProfiles.add(caller, updatedProfile);
      };
    };
  };

  // Any authenticated user can check if they're logged in
  public query ({ caller }) func isLoggedIn() : async Bool {
    AccessControl.hasPermission(accessControlState, caller, #user);
  };
};
