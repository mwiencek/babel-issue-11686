function Component(props) {
  return props.options[0].name;
}

function getUser() {
  return {name: 'foo'};
}

function getOptions(user) {
  return [{name: user.name}];
}

function useHook(source) {
  const user = getUser();

  const options = React.useMemo(() => {
    return getOptions(user);
  }, [user]);

  return React.useCallback(() => (
    <Component
      source={source}
      options={options}
      user={user}
    />
  ), [
    source,
    options,
    user,
  ]);
}
