import withLayout from '../components/withLayout'
import injectEnvironmentVar from '../components/injectEnvironmentVar'
import ensureSignedIn from '../components/ensureSignedIn'
import withSession from '../components/withSession'

const Secret = () => {
  return <div>this secret can only be seen when you're signed in</div>
}

const injectAuthApiUrl = injectEnvironmentVar('AUTHENTICATION_API_URL')

export default (
  withSession(
    withLayout(
      injectAuthApiUrl(
        ensureSignedIn(
          Secret
        )
      )
    )
  )
)
