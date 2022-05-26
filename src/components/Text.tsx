import Header from './Header';

const HeaderText = () => {
  return (
    <div className='landing-page relative'>
      <Header as='h1' className='' withGradient={false}>
        I am H1
      </Header>
      <Header as='h2' className='' withGradient={false}>
        I am H2
      </Header>
      <Header as='h3' className='' withGradient={false}>
        I am H3
      </Header>
      <Header as='h4' className='' withGradient={false}>
        I am H4
      </Header>
      <Header as='h5' className='' withGradient={false}>
        I am H5
      </Header>
      <Header as='h6' className='' withGradient={false}>
        I am H6
      </Header>
    </div>
  );
};

export default HeaderText;
