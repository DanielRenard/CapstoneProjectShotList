// import "/src/style/navbar.css";
import "/src/style/footer.css";

export default function Footer() {
  let externalLinks = (
    <>
      <a href="https://outlook.office.com/mail/" target="_blank">
        Outlook
      </a>
      <a href="https://outlook.office.com/calendar/view/month" target="_blank">
        Outlook Calendar
      </a>
      <a href="https://wd5.myworkday.com/nexstar/d/home.htmld" target="_blank">
        Workday
      </a>
      <a
        href="http://daybook-klfy.nexstar.tv/index.php?q=daybook"
        target="_blank"
      >
        Daybook
      </a>
    </>
  );

  return (
    <div className="footer">
      <span className="text">A DJRenard FoxBot Product...</span>
      {externalLinks}
    </div>
  );
}
