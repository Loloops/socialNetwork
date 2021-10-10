import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.profileInfoImg}>
        <img src='https://images.ctfassets.net/hrltx12pl8hq/1XAMCcfZRbFQmNCuFR8oXH/e1bddb571332e355b076109938db0bf3/shutterstock_1308690499.jpg?fit=fill&w=800&h=400' />
      </div>
      <div className={classes.descriptionBlock}>
        ava + desc
      </div>
    </div>

  )
}
export default ProfileInfo