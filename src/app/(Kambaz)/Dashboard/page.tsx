import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/react.png" width={200} height={150} alt="React JS Course" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image src="/images/nextjs.png" width={200} height={150} alt="Next JS Course" />
            <div>
              <h5> CS5678 Next JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/91011" className="wd-dashboard-course-link">
            <Image src="/images/vuejs.png" width={200} height={150} alt="Vue JS Course" />
            <div>
              <h5> CS91011 Vue JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/121314" className="wd-dashboard-course-link">
            <Image src="/images/angular.svg" width={200} height={150} alt="Angular Course" />
            <div>
              <h5> CS121314 Angular </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/181920" className="wd-dashboard-course-link">
            <Image src="/images/nodejs.png" width={200} height={150} alt="Node.js Course" />
            <div>
              <h5> CS181920 Node.js </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/212223" className="wd-dashboard-course-link">
            <Image src="/images/python.png" width={200} height={150} alt="Python Course" />
            <div>
              <h5> CS212223 Python </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/242526" className="wd-dashboard-course-link">
            <Image src="/images/javascript.png" width={200} height={200} alt="Javascript Course" />
            <div>
              <h5> CS242526 Javascript </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/272829" className="wd-dashboard-course-link">
            <Image src="/images/css.svg" width={200} height={200} alt="CSS Course" />
            <div>
              <h5> CS272829 CSS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
