import logoGithub from '../Icon/GitHub_Lockup_Black.svg';

export default function Footer() {
  return (
    <footer className="p-6 border-t-2 border-[#ded9cf] bg-[#ece8e1] flex justify-center">
      <a
        href="https://github.com/Benja45674?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logoGithub} alt="GitHub" className="h-6 w-auto" />
      </a>
    </footer>
  );
}
