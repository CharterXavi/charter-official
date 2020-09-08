import React, {useEffect} from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import './about.css';
import HeaderStrip from '../components/header-strip/header-strip';
import Video from '../components/video/video';
import aboutImage from '../images/headers/about-header.png';
import NewsStrip from '../components/news/news';
import OurTeamStrip from '../components/our-team/our-team'
import LocationsStrip from '../components/locations/locations';
import AOS from "aos";
import "aos/dist/aos.css";
import {graphql} from 'gatsby';

const AboutPage = ({data}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <Layout>
      <SEO title="About Us" />
      <HeaderStrip 
        image={aboutImage}
        title='About Charter'
        headline='Healthcare with YOU in mind at every stage'
      />
      <div className='intro'>
        <h2>Our Mission</h2>
        <p>Charter is committed to delivering high quality services that enhance the post acute care continuum in its communities by providing compassionate, innovative, and accessible healthcare solutions for patients and their families.</p>
        <p>We strive to improve patient outcomes and quality of care while reducing ​the total cost of care by: ​</p>
        <ul>
          <li>Decreasing acute hospitalizations​</li>
          <li>Managing transitions of care in the Skilled Nursing Facility (SNF) continuum</li>
          <li>Aiming to serve chronic, frail, and terminally ill populations at the end-of-life</li>
        </ul>
      </div>
      <div className='our-story'>
        <div className='left' data-aos='fade-up' data-aos-duration='900'>
          <h2>Our Story</h2>
          <p>Charter is committed to delivering high quality services that enhance the post acute care continuum in its communities by providing compassionate, innovative, and accessible healthcare solutions for patients and their families.</p>
          <p>We strive to improve patient outcomes and quality of care while reducing ​the total cost of care by: ​</p>
        </div>
        <div className='middle' data-aos='fade-up' data-aos-duration='1300'>
          <svg className='path-graphic' xmlns="http://www.w3.org/2000/svg" width="91" height="324" viewBox="0 0 91 324" fill="none">
            <g filter="url(#filter1_d)">
            <path fillRule="evenodd" clipRule="evenodd" d="M87 25C87 38.8071 76.031 50 62.5 50C56.5372 50 51.0719 47.8264 46.8236 44.2133C45.9617 44.9921 44.9151 45.9538 43.7312 47.0724C40.2861 50.3277 35.7061 54.8862 31.1399 60.1163C26.5595 65.3627 22.0786 71.1881 18.7648 76.9771C15.4067 82.8434 13.5 88.2393 13.5 92.7318C13.5 96.4031 15.4853 99.6306 19.7955 103.11C23.6027 106.184 28.5414 108.92 34.0739 111.985C34.9332 112.461 35.8069 112.945 36.6929 113.439C43.0414 116.982 49.9261 121.019 55.1969 126.236C60.5973 131.582 64.5 138.36 64.5 147.24C64.5 156.158 60.562 162.725 55.0988 167.815C49.8164 172.737 42.897 176.466 36.6319 179.836L36.5511 179.88C30.066 183.368 24.259 186.492 19.9812 190.347C15.8707 194.051 13.5 198.141 13.5 203.629C13.5 208.749 15.8927 211.959 20.2224 214.594C24.7172 217.33 30.738 219.082 37.439 221.032L38.196 221.252C44.7734 223.168 52.2167 225.373 57.475 229.32C60.2232 231.383 62.5649 234.047 63.8853 237.548C65.2064 241.051 65.3523 244.986 64.3946 249.332C60.8215 265.547 47.1111 281.119 35.122 292.235C29.6892 297.272 24.4298 301.555 20.2662 304.757L30.7638 306.565C33.213 306.987 34.8565 309.315 34.4347 311.764C34.0129 314.213 31.6855 315.857 29.2362 315.435L8.23624 311.818C6.07743 311.446 4.5 309.574 4.5 307.383V286C4.5 283.515 6.51472 281.5 9 281.5C11.4853 281.5 13.5 283.515 13.5 286V298.6C17.6715 295.442 23.2461 290.973 29.003 285.635C40.8889 274.615 52.6785 260.678 55.6054 247.395C56.2727 244.367 56.0436 242.26 55.4643 240.724C54.8843 239.186 53.8002 237.815 52.0719 236.518C48.3771 233.744 42.6641 231.928 35.679 229.893C35.2795 229.777 34.8758 229.659 34.4687 229.541L34.4685 229.541C28.1933 227.721 21.0976 225.663 15.5432 222.282C9.29484 218.479 4.5 212.692 4.5 203.629C4.5 194.933 8.50428 188.574 13.9563 183.661C19.0523 179.069 25.6886 175.501 31.7589 172.238L32.3681 171.91C38.853 168.422 44.6836 165.218 48.9637 161.231C53.063 157.411 55.5 153.091 55.5 147.24C55.5 141.352 53.0277 136.752 48.8656 132.633C44.5739 128.385 38.7086 124.871 32.3071 121.298C31.48 120.837 30.6407 120.373 29.7947 119.905L29.793 119.904L29.7929 119.904C24.339 116.888 18.6121 113.722 14.142 110.113C8.88966 105.873 4.5 100.339 4.5 92.7318C4.5 85.9454 7.28075 78.9229 10.954 72.506C14.6714 66.0118 19.5655 59.6891 24.3601 54.1973C29.1689 48.6892 33.9639 43.9193 37.55 40.5308C38.944 39.2137 40.1595 38.1013 41.1274 37.2312C39.1359 33.6154 38 29.443 38 25C38 11.1929 48.969 0 62.5 0C76.031 0 87 11.1929 87 25ZM67.4 10H57.6V20H47.8V30H57.6V40H67.4V30H77.2V20H67.4V10Z" fill="url(#paint1_linear)"/>
            </g>
            <defs>
            <filter id="filter1_d" x="0.5" y="0" width="90.5" height="323.501" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="paint1_linear" x1="4.5" y1="315.501" x2="87" y2="315.501" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F493AA"/>
            <stop offset="1" stopColor="#F2D1C9"/>
            </linearGradient>
            </defs>
          </svg>
          <svg className='checkmark' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <g filter="url(#filter2_d)">
            <path d="M10 18.3L14.1378 23.0289C14.5395 23.488 15.2552 23.4835 15.6512 23.0193L25.05 12" stroke="#363F55" strokeWidth="5.6" strokeLinecap="round"/>
            </g>
            <defs>
            <filter id="filter2_d" x="-2" y="0" width="39" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
          </svg>
          <svg className='checkmark' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <g filter="url(#filter2_d)">
            <path d="M10 18.3L14.1378 23.0289C14.5395 23.488 15.2552 23.4835 15.6512 23.0193L25.05 12" stroke="#363F55" strokeWidth="5.6" strokeLinecap="round"/>
            </g>
            <defs>
            <filter id="filter2_d" x="-2" y="0" width="39" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
          </svg>
          <svg className='checkmark' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <g filter="url(#filter2_d)">
            <path d="M10 18.3L14.1378 23.0289C14.5395 23.488 15.2552 23.4835 15.6512 23.0193L25.05 12" stroke="#363F55" strokeWidth="5.6" strokeLinecap="round"/>
            </g>
            <defs>
            <filter id="filter2_d" x="-2" y="0" width="39" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
          </svg>
          <svg className='checkmark' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <g filter="url(#filter2_d)">
            <path d="M10 18.3L14.1378 23.0289C14.5395 23.488 15.2552 23.4835 15.6512 23.0193L25.05 12" stroke="#363F55" strokeWidth="5.6" strokeLinecap="round"/>
            </g>
            <defs>
            <filter id="filter2_d" x="-2" y="0" width="39" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
          </svg>
        </div>
        <div className='right' data-aos='fade-up' data-aos-duration='1800'>
          <h2>Our Commitment</h2>
          <p>One of our highest-priority commitments is to instill compassion and sensitivity in our teams for our patients, families, and peers. We believe in the power of truly, genuinely being there for those that depend on us and our services.</p>
          <p>But that's not all. We're committed as well to training and education, creating an environment of learning, and fostering healthy working relationships. </p>
        </div>
      </div>
      <Video />
      <NewsStrip posts={data.recent.edges} />
      <OurTeamStrip />
      <LocationsStrip />
    </Layout>
    )
  }

export default AboutPage;

export const recentPostsQuery = graphql`
query {
  recent: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {}, limit: 3) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          category
          featuredImage {
            relativePath
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
}
`