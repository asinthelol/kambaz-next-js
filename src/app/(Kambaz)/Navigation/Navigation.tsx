import Link from "next/link";
export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <Link href="/Account" id="wd-account-link">Account</Link><br/>
      <Link href="/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
      <Link href="/Courses" id="wd-course-link">Courses</Link><br/>
      <Link href="/Calendar" id="wd-calendar-link">Calendar</Link><br/>
      <Link href="/Inbox" id="wd-inbox-link">Inbox</Link><br/>
      {/* <Link href="/History" id="wd-history-link">History</Link><br/> */}
      <Link href="/Labs" id="wd-labs-link">Labs</Link><br/>
      {/* <Link href="/Studio" id="wd-studio-link">Studio</Link><br/> */}
      {/* <Link href="/Commons" id="wd-commons-link">Commons</Link><br/> */}
      {/* <Link href="/Help" id="wd-help-link">Help</Link><br/> */}
    </div>
);}
