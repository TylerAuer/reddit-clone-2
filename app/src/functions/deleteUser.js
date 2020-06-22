const deleteUser = (username, setLoginContextCallback) => {
  if (
    window.confirm(
      'Are you sure you want to delete ' +
        username +
        "'s account? This cannot be undone."
    )
  ) {
    if (window.confirm("Are you REALLY sure. There's no going back?")) {
      // Delete account API call here
      console.log('Account deleted');
      setLoginContextCallback(false);
    }
  }
};

export default deleteUser;
