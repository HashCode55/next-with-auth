const withProtection = Page => {
  return class withProtection extends React.Component {
    static getInitialProps(context) {
      if (Page.getInitialProps) {
        return Page.getInitialProps(context)
      } else {
        return {}
      }
    }

    constructor(props) {
      super(props)
      if (!props.session) {
        if (process.browser) {
          this.props.url.push('/sign-in?next=' + encodeURI(window.location))
        }
      }
    }

    render() {
      const isSignedIn = !!this.props.session

      if (isSignedIn) {
        return (
          <div>
            <Page {...this.props} />
          </div>
        )
      } else {
        return null
      }
    }
  }
}

export default withProtection
