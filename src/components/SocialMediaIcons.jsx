const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-50"
        href="https://linkedin.com/in/omar-rodrigo-vergaray-marreros-ba83a8149/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-50"
        href="https://twitter.com/omarhino17"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-50"
        href="https://www.facebook.com/omar.vergaray"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png"/>
      </a>    
    </div>
  )
}
export default SocialMediaIcons;