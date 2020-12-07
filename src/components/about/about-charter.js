import React, {useEffect} from "react";
import './about-charter.css';
import bookIcon from '../../images/iconography/about/book.png';
import checkboxIcon from '../../images/iconography/about/checkbox.png';
import targetIcon from '../../images/iconography/about/target.png';
import AOS from "aos";
import "aos/dist/aos.css";

const AboutCharter = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
});


  return (
    <div className='AboutCharter'>
      <h4>Charter Healthcare Group</h4>
      <div className='about-card-wrapper'>
        <div className='about-card' data-aos='fade-up' data-aos-duration='900'>
          <svg width="50" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
            <g filter="url(#target)">
            <path fillRule="evenodd" clipRule="evenodd" d="M34.6623 5.78482C35.1981 5.07047 34.9677 4.04307 34.1484 3.68782C31.3447 2.47207 28.2511 1.7981 25 1.7981C12.2975 1.7981 2 12.0867 2 24.7783C2 37.47 12.2975 47.7586 25 47.7586C37.7025 47.7586 48 37.47 48 24.7783C48 19.6502 46.3188 14.9145 43.4772 11.0912C42.9582 10.393 41.9379 10.3817 41.3541 11.0266C40.8716 11.5596 40.8588 12.3629 41.2825 12.9438C43.7052 16.2649 45.1345 20.3552 45.1345 24.7783C45.1345 35.8851 36.1223 44.8931 25 44.8931C13.8777 44.8931 4.86551 35.8851 4.86551 24.7783C4.86551 13.6716 13.8777 4.66361 25 4.66361C27.7824 4.66361 30.4328 5.22735 32.843 6.24666C33.4866 6.51886 34.243 6.34388 34.6623 5.78482ZM30.6473 11.1376C31.2129 10.3836 30.9311 9.2966 30.033 9.01066C28.4458 8.5053 26.7546 8.23256 24.9998 8.23256C15.8539 8.23256 8.43975 15.6404 8.43975 24.7783C8.43975 33.9163 15.8539 41.3241 24.9998 41.3241C34.1456 41.3241 41.5598 33.9163 41.5598 24.7783C41.5598 21.5804 40.6517 18.5944 39.0792 16.0636C38.6003 15.2928 37.5273 15.2537 36.9182 15.9265C36.4563 16.4367 36.421 17.1963 36.7735 17.7875C37.9935 19.8336 38.6942 22.2244 38.6942 24.7783C38.6942 32.3314 32.5653 38.4586 24.9998 38.4586C17.4342 38.4586 11.3053 32.3314 11.3053 24.7783C11.3053 17.2253 17.4342 11.0981 24.9998 11.0981C26.3634 11.0981 27.6805 11.2971 28.9233 11.6678C29.5552 11.8562 30.2517 11.6651 30.6473 11.1376ZM26.352 16.8642C27.011 15.9856 26.569 14.7281 25.4718 14.6778C25.3154 14.6706 25.1581 14.667 25 14.667C19.4109 14.667 14.88 19.194 14.88 24.7783C14.88 30.3626 19.4109 34.8896 25 34.8896C30.5891 34.8896 35.12 30.3626 35.12 24.7783C35.12 23.5836 34.9126 22.4373 34.5319 21.3734C34.1884 20.4135 32.9666 20.2915 32.2823 21.0473C31.8744 21.4979 31.7876 22.1439 31.9596 22.7269C32.1515 23.3774 32.2545 24.0659 32.2545 24.7783C32.2545 28.7777 29.0089 32.0241 25 32.0241C20.9911 32.0241 17.7455 28.7777 17.7455 24.7783C17.7455 20.7789 20.9911 17.5325 25 17.5325C25.5071 17.5325 26.0035 17.3289 26.3077 16.9232L26.352 16.8642Z" fill="url(#target3)"/>
            <g filter="url(#target1)">
            <mask id="target2" fill="white">
            <path fillRule="evenodd" clipRule="evenodd" d="M41.6691 3.52895L40.3922 0L32.8084 10.0617L32.865 12.6731L23.8809 23.9033C23.3866 24.5212 23.4868 25.4228 24.1047 25.9171C24.7226 26.4114 25.6242 26.3112 26.1185 25.6933L35.2736 14.2495L37.7638 13.5449L45.5115 3.81317L41.6691 3.52895Z"/>
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M41.6691 3.52895L40.3922 0L32.8084 10.0617L32.865 12.6731L23.8809 23.9033C23.3866 24.5212 23.4868 25.4228 24.1047 25.9171C24.7226 26.4114 25.6242 26.3112 26.1185 25.6933L35.2736 14.2495L37.7638 13.5449L45.5115 3.81317L41.6691 3.52895Z" fill="white"/>
            <path d="M40.3922 0L42.1886 -0.649974L40.9889 -3.96552L38.8667 -1.14984L40.3922 0ZM41.6691 3.52895L39.8727 4.17893L40.2938 5.34279L41.5282 5.43409L41.6691 3.52895ZM32.8084 10.0617L31.2829 8.91187L30.8842 9.44084L30.8986 10.1031L32.8084 10.0617ZM32.865 12.6731L34.3567 13.8665L34.7899 13.325L34.7749 12.6318L32.865 12.6731ZM23.8809 23.9033L22.3892 22.7099H22.3892L23.8809 23.9033ZM24.1047 25.9171L25.2981 24.4254L25.298 24.4254L24.1047 25.9171ZM26.1185 25.6933L24.6268 24.5H24.6268L26.1185 25.6933ZM35.2736 14.2495L34.7534 12.4113L34.1643 12.578L33.7818 13.0561L35.2736 14.2495ZM37.7638 13.5449L38.2839 15.383L38.8754 15.2157L39.2583 14.7347L37.7638 13.5449ZM45.5115 3.81317L47.006 5.00302L49.2578 2.17471L45.6524 1.90803L45.5115 3.81317ZM38.5958 0.649974L39.8727 4.17893L43.4654 2.87898L42.1886 -0.649974L38.5958 0.649974ZM34.334 11.2115L41.9178 1.14984L38.8667 -1.14984L31.2829 8.91187L34.334 11.2115ZM34.7749 12.6318L34.7183 10.0204L30.8986 10.1031L30.9551 12.7145L34.7749 12.6318ZM25.3726 25.0966L34.3567 13.8665L31.3733 11.4798L22.3892 22.7099L25.3726 25.0966ZM25.298 24.4254C25.504 24.5901 25.5374 24.8907 25.3726 25.0966L22.3892 22.7099C21.2358 24.1516 21.4695 26.2554 22.9113 27.4088L25.298 24.4254ZM24.6268 24.5C24.7915 24.294 25.0921 24.2606 25.2981 24.4254L22.9113 27.4088C24.353 28.5622 26.4568 28.3285 27.6102 26.8867L24.6268 24.5ZM33.7818 13.0561L24.6268 24.5L27.6102 26.8867L36.7653 15.4429L33.7818 13.0561ZM37.2437 11.7067L34.7534 12.4113L35.7937 16.0877L38.2839 15.383L37.2437 11.7067ZM44.017 2.62332L36.2693 12.355L39.2583 14.7347L47.006 5.00302L44.017 2.62332ZM41.5282 5.43409L45.3706 5.7183L45.6524 1.90803L41.81 1.62382L41.5282 5.43409Z" fill="#363F55" mask="url(#target2)"/>
            </g>
            </g>
            <defs>
            <filter id="target" x="0.0896602" y="0" width="49.8207" height="51.5792" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="1.91034"/>
            <feGaussianBlur stdDeviation="0.95517"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <filter id="target1" x="21.6566" y="0" width="25.7653" height="30.0518" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="1.91034"/>
            <feGaussianBlur stdDeviation="0.95517"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="target3" x1="4.46429" y1="47.7586" x2="57.8833" y2="24.4127" gradientUnits="userSpaceOnUse">
            <stop offset="0.109375" stopColor="#F14D70"/>
            <stop offset="0.317708" stopColor="#FF008A"/>
            <stop offset="0.520833" stopColor="#FF446C"/>
            <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
            </defs>
          </svg>
          <h6>Our Mission</h6>
          <p>Charter is committed to delivering high quality services that enhance the post acute care continuum in its communities by providing compassionate, innovative, and accessible healthcare solutions for patients and their families.</p>
          <p>Above all, we strive to improve patient outcomes and quality of care while reducing ​the total cost of care. ​</p>
        </div>
        <div className='about-card' data-aos='fade-up' data-aos-duration='1300'>
          <svg width="52" viewBox="0 0 51 44" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
            <g filter="url(#book)">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.6 6.95654C2.71634 6.95654 2 7.67289 2 8.55654V36.6609C2 37.5445 2.71634 38.2609 3.6 38.2609H21.5652V38.3998C21.5652 39.2835 22.2816 39.9998 23.1652 39.9998H27.7913C28.675 39.9998 29.3913 39.2835 29.3913 38.3998V38.2609H47.3565C48.2402 38.2609 48.9565 37.5445 48.9565 36.6609V8.55654C48.9565 7.67289 48.2402 6.95654 47.3565 6.95654H3.6Z" fill="#363F55"/>
              <path d="M46.9913 35.1876C46.8586 35.1682 46.6995 35.1455 46.517 35.1201C45.9271 35.0382 45.0919 34.929 44.1094 34.8198C42.1466 34.6018 39.5865 34.3826 37.2174 34.3826C34.8483 34.3826 32.2882 34.6018 30.3254 34.8198C29.3428 34.929 28.5076 35.0382 27.9178 35.1201C27.7353 35.1455 27.5762 35.1682 27.4435 35.1876V4.69177C27.5936 4.66959 27.7905 4.64112 28.0278 4.60816C28.6119 4.52705 29.4397 4.41883 30.4137 4.31061C32.3639 4.09392 34.8908 3.87827 37.2174 3.87827C39.5439 3.87827 42.0708 4.09392 44.021 4.31061C44.995 4.41883 45.8229 4.52705 46.4069 4.60816C46.6442 4.64112 46.8412 4.66959 46.9913 4.69177V35.1876Z" fill="url(#book1)" stroke="#363F55" strokeWidth="0.8"/>
              <path d="M45.4259 32.9474C45.3608 32.9303 45.2898 32.9121 45.2131 32.8931C44.7376 32.7749 44.0409 32.623 43.1477 32.4851C41.3614 32.2094 38.788 31.99 35.6242 32.2097C32.4352 32.4311 29.8441 33.3169 28.0491 34.1479C27.1514 34.5635 26.4516 34.966 25.9744 35.266C25.9412 35.2868 25.9091 35.3072 25.878 35.3271V2.4181C25.9903 2.36285 26.1477 2.28838 26.3479 2.20055C26.8001 2.00225 27.4706 1.736 28.3351 1.46917C30.0644 0.935448 32.5679 0.4 35.6519 0.4C38.736 0.4 41.2395 0.935448 42.9688 1.46917C43.8333 1.736 44.5038 2.00225 44.9559 2.20055C45.1562 2.28838 45.3135 2.36285 45.4259 2.4181V32.9474Z" fill="white" stroke="#363F55" strokeWidth="0.8"/>
              <path d="M23.5133 35.1876C23.3805 35.1682 23.2215 35.1455 23.0389 35.1201C22.4491 35.0382 21.6139 34.929 20.6313 34.8198C18.6685 34.6018 16.1085 34.3826 13.7393 34.3826C11.3702 34.3826 8.81016 34.6018 6.84734 34.8198C5.86482 34.929 5.02962 35.0382 4.43975 35.1201C4.25722 35.1455 4.09815 35.1682 3.96543 35.1876V4.68832C4.10375 4.66663 4.28275 4.63924 4.49774 4.60774C5.0506 4.52674 5.84115 4.41862 6.79007 4.31048C8.68938 4.09404 11.2165 3.87827 13.7393 3.87827C16.2622 3.87827 18.7893 4.09404 20.6886 4.31048C21.6375 4.41862 22.4281 4.52674 22.9809 4.60774C23.1959 4.63924 23.3749 4.66663 23.5133 4.68832V35.1876Z" fill="url(#book2)" stroke="#363F55" strokeWidth="0.8"/>
              <path d="M25.0782 35.2665C25.0534 35.2486 25.028 35.2302 25.0019 35.2115C24.5244 34.8694 23.8239 34.411 22.9249 33.9393C21.1277 32.9963 18.5303 31.997 15.332 31.7749C12.1589 31.5545 9.57739 31.8848 7.78503 32.2721C6.88884 32.4657 6.18968 32.6736 5.71212 32.8342C5.64746 32.8559 5.58686 32.8768 5.53037 32.8967V2.4354C5.66455 2.37842 5.85453 2.30011 6.09422 2.2072C6.61111 2.00686 7.35841 1.73896 8.27524 1.47088C10.1113 0.934035 12.6152 0.4 15.3043 0.4C17.9933 0.4 20.4973 0.934035 22.3333 1.47088C23.2502 1.73896 23.9975 2.00686 24.5143 2.2072C24.754 2.30011 24.944 2.37842 25.0782 2.4354V35.2665Z" fill="white" stroke="#363F55" strokeWidth="0.8"/>
            </g>
            <defs>
              <filter id="book" x="0.4" y="0" width="50.1565" height="43.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="1.6"/>
                <feGaussianBlur stdDeviation="0.8"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              <linearGradient id="book1" x1="28.1335" y1="35.6522" x2="54.2822" y2="28.4311" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
              </linearGradient>
              <linearGradient id="book2" x1="4.65549" y1="35.6522" x2="30.8041" y2="28.4311" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
              </linearGradient>
            </defs>
          </svg>
            <h6>Our Story</h6>
            <p>From the moment of conception, Charter has been a place where people care deeply about their work and their patients. Since we first obtained our accrediations and certifications in 2007, we've been expanding and growing rapidly to meet the needs of our communities at home and beyond.</p>
            <p>As we continue extending our reach across southern California, we're also actively opening new doors in other states like Colorado, Nevada, Utah, Arizona, and beyond.</p>
        </div>
        <div className='about-card' data-aos='fade-up' data-aos-duration='1800'>
          <svg width="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
            <g filter="url(#checkbox)">
              <mask id="checkbox1" fill="white">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.44 0C2.64471 0 2 0.644708 2 1.44V38.56C2 39.3553 2.64471 40 3.44 40H40.56C41.3553 40 42 39.3553 42 38.56V1.44C42 0.64471 41.3553 0 40.56 0H3.44ZM9.37926 6.39982C8.83846 6.39982 8.40006 6.83822 8.40006 7.37902V32.6206C8.40006 33.1614 8.83846 33.5998 9.37926 33.5998H34.6209C35.1617 33.5998 35.6001 33.1614 35.6001 32.6206V7.37902C35.6001 6.83822 35.1617 6.39982 34.6209 6.39982H9.37926Z"/>
              </mask>
              <path fillRule="evenodd" clipRule="evenodd" d="M3.44 0C2.64471 0 2 0.644708 2 1.44V38.56C2 39.3553 2.64471 40 3.44 40H40.56C41.3553 40 42 39.3553 42 38.56V1.44C42 0.64471 41.3553 0 40.56 0H3.44ZM9.37926 6.39982C8.83846 6.39982 8.40006 6.83822 8.40006 7.37902V32.6206C8.40006 33.1614 8.83846 33.5998 9.37926 33.5998H34.6209C35.1617 33.5998 35.6001 33.1614 35.6001 32.6206V7.37902C35.6001 6.83822 35.1617 6.39982 34.6209 6.39982H9.37926Z" fill="url(#checkbox2)"/>
              <path d="M3 1.44C3 1.19699 3.19699 1 3.44 1V-1C2.09243 -1 1 0.0924218 1 1.44H3ZM3 38.56V1.44H1V38.56H3ZM3.44 39C3.19699 39 3 38.803 3 38.56H1C1 39.9076 2.09242 41 3.44 41V39ZM40.56 39H3.44V41H40.56V39ZM41 38.56C41 38.803 40.803 39 40.56 39V41C41.9076 41 43 39.9076 43 38.56H41ZM41 1.44V38.56H43V1.44H41ZM40.56 1C40.803 1 41 1.19699 41 1.44H43C43 0.0924272 41.9076 -1 40.56 -1V1ZM3.44 1H40.56V-1H3.44V1ZM9.40006 7.37902C9.40006 7.37901 9.40006 7.37909 9.40005 7.37925C9.40004 7.37942 9.40002 7.37965 9.4 7.37994C9.39994 7.38053 9.39983 7.38128 9.39965 7.38215C9.39928 7.38394 9.39872 7.38575 9.39801 7.38742C9.39665 7.39063 9.39512 7.39257 9.39397 7.39373C9.39281 7.39488 9.39087 7.39642 9.38766 7.39777C9.38599 7.39848 9.38418 7.39904 9.38239 7.39941C9.38152 7.39959 9.38077 7.3997 9.38018 7.39976C9.37989 7.39979 9.37966 7.3998 9.37949 7.39981C9.37933 7.39982 9.37925 7.39982 9.37926 7.39982V5.39982C8.28617 5.39982 7.40006 6.28594 7.40006 7.37902H9.40006ZM9.40006 32.6206V7.37902H7.40006V32.6206H9.40006ZM9.37926 32.5998C9.37925 32.5998 9.37933 32.5998 9.37949 32.5998C9.37966 32.5998 9.37989 32.5998 9.38018 32.5999C9.38077 32.5999 9.38152 32.6 9.38239 32.6002C9.38418 32.6006 9.38599 32.6012 9.38766 32.6019C9.39087 32.6032 9.39281 32.6048 9.39396 32.6059C9.39512 32.6071 9.39665 32.609 9.39801 32.6122C9.39872 32.6139 9.39928 32.6157 9.39965 32.6175C9.39983 32.6184 9.39994 32.6191 9.4 32.6197C9.40002 32.62 9.40004 32.6202 9.40005 32.6204C9.40006 32.6205 9.40006 32.6206 9.40006 32.6206H7.40006C7.40006 33.7137 8.28618 34.5998 9.37926 34.5998V32.5998ZM34.6209 32.5998H9.37926V34.5998H34.6209V32.5998ZM34.6001 32.6206C34.6001 32.6206 34.6001 32.6203 34.6001 32.6197C34.6002 32.6191 34.6003 32.6184 34.6005 32.6175C34.6008 32.6157 34.6014 32.6139 34.6021 32.6122C34.6035 32.609 34.605 32.6071 34.6061 32.6059C34.6073 32.6048 34.6092 32.6032 34.6125 32.6019C34.6141 32.6012 34.6159 32.6006 34.6177 32.6002C34.6186 32.6 34.6193 32.5999 34.6199 32.5999C34.6205 32.5998 34.6209 32.5998 34.6209 32.5998V34.5998C35.7139 34.5998 36.6001 33.7137 36.6001 32.6206H34.6001ZM34.6001 7.37902V32.6206H36.6001V7.37902H34.6001ZM34.6209 7.39982C34.6209 7.39982 34.6208 7.39982 34.6206 7.39981C34.6205 7.3998 34.6202 7.39979 34.6199 7.39976C34.6193 7.3997 34.6186 7.39959 34.6177 7.39941C34.6159 7.39904 34.6141 7.39848 34.6125 7.39777C34.6092 7.39641 34.6073 7.39488 34.6061 7.39373C34.605 7.39257 34.6035 7.39063 34.6021 7.38742C34.6014 7.38575 34.6008 7.38394 34.6005 7.38215C34.6003 7.38128 34.6002 7.38053 34.6001 7.37994C34.6001 7.37965 34.6001 7.37942 34.6001 7.37925C34.6001 7.37909 34.6001 7.37901 34.6001 7.37902H36.6001C36.6001 6.28594 35.7139 5.39982 34.6209 5.39982V7.39982ZM9.37926 7.39982H34.6209V5.39982H9.37926V7.39982Z" fill="white" mask="url(#checkbox1)"/>
              <path d="M13.4287 20.9144L18.2447 26.4183C18.6579 26.8906 19.3941 26.886 19.8013 26.4085L30.6287 13.7144" stroke="#363F55" strokeWidth="5.76" strokeLinecap="round"/>
            </g>
            <defs>
              <filter id="checkbox" x="0.4" y="0" width="43.2" height="43.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="1.6"/>
                <feGaussianBlur stdDeviation="0.8"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              <linearGradient id="checkbox2" x1="4.14286" y1="40" x2="50.607" y2="19.7111" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
              </linearGradient>
            </defs>
          </svg>
            <h6>Our Commitment</h6>
            <p>We're committed to instilling compassion and sensitivity in our teams for our patients, families, and peers. We believe in the power of truly, genuinely being there for those that depend on us and our services.</p>
            <p>But that's not all. We're committed as well to training and education, creating an environment of learning, and fostering healthy working relationships. </p>
        </div>
      </div>
    </div>
  )
}

export default AboutCharter;

