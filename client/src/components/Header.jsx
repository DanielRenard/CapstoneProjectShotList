import "/src/style/header.css";

export default function Header() {
  return (
    <div className="Header">
      <a href="https://danielrenard.github.io/" target="_blank">
        <img className="HeaderImage" src="/images/FoxBotArielDesignEdit.jpg" />
      </a>
      <span className="HeaderTitle">Welcome to Shot List</span>
    </div>
  );
}
