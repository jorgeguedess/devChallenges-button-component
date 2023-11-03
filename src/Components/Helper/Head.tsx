const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + ' | DevChallenges';
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', props.description || '');
  }, [props]);

  return <></>;
};

export default Head;
