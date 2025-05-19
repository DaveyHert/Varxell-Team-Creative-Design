import "./ProfileCard.css";

interface ProfileCardProps {
  profile: {
    avatar: string;
    name: string;
    xHandle: string;
    country: string;
    role: string;
  };
}

function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <a href='#' className='profile-card'>
      <img src={profile.avatar} alt='' className='avatar' />
      <img src={profile.avatar} alt='' className='avatar-blur' />
      <div className='card-content'>
        <div className='user-details'>
          <h4 className='full-name'>{profile.name}</h4>
          <span className='x-handle'>{profile.xHandle}</span>
        </div>
        <div className='user-info'>
          <p className='role'>{profile.role}</p>
          <span className='country'>{profile.country}</span>
        </div>
      </div>
    </a>
  );
}
export default ProfileCard;
