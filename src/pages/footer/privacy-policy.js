import './privacy-policy.css';

import Layout from "../../components/layout";
import React from "react";
import SEO from "../../components/seo";

const PrivacyPage = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <div className='PrivacyPage'>
      <section className='two-column'>
        <h1>Privacy Policy</h1>
        <hr/>
        <p>
          Charter and its affiliates (“Charter”) are committed to protecting your privacy so we have developed privacy policies to
          protect the information we collect from you. We developed the Notice of Privacy Practices, which is provided to you in connection
          with our services and available on the site, to describe our privacy practices regarding your “Protected Health Information” as
          required under the Health Insurance Portability and Accountability Act of 1996 and its regulations.
        </p>
        <p>
          This Privacy Policy applies to the Charter’s website (“Site”) and describes the types of information we may collect from you, or
          that you may provide when you visit the Site, and our practices for collecting and using that information.
        </p>
        <p>
          By using the Site, you consent to the data practices described herein. We reserve the right to change the terms of this Privacy
          Policy by posting an updated version on the Site so that you are always aware of our process related to collection, use and disclosure
          of information. We urge you occasionally check the Site for any updates to the Privacy Policy.
        </p>

      {/*------ COLLECTION OF INFORMATION ------ */}
        <h4>Collection of Information</h4>
        <p>Charter collects different types of information: Personal Information and Anonymous Information.</p>
        <p>
          Charter collects personally identifiable information that you voluntarily provide to us, such as your e-mail address, name,
          home or work address or telephone number. While visiting the Site, if you provide personally identifiable information to receive
          information back from us, we will collect and store that personal data. 
        </p>
        <p>
          Charter also collects anonymous demographic information, which is not unique to you, such as your ZIP code, age, gender, preferences,
          interests and favorites.
        </p>
        <p>
          There is also information about your computer hardware and software that is automatically collected by Charter. This information can
          include: your IP address, browser type, domain names, access times and referring Web site addresses. This information is used by Charter
          for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Charter’s Site.
        </p>
        <p>
          Charter encourages you to review the privacy statements of sites you choose to link to from Charter so that you can understand how those
          web sites collect, use and share your information. Charter is not responsible for the privacy statements or other content on web sites outside of Charter.
        </p>

      {/*------ USE OF PERSONAL INFORMATION ------ */}
        <h4>Use of your Personal Information</h4>
        <p>
          Charter collects and uses your personal information to operate the Charter’s Site and deliver the services you have requested. Charter also
          uses your personally identifiable information to inform you of other products or services available from Charter and its affiliates. If
          provided to Charter, we may use your name, email address, mailing address, telephone number, or other data to communicate with you.
        </p>
        <p>
          Charter does not sell, rent or lease its customer lists to third parties. Charter may share data with trusted partners to help us perform
          statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited
          from using your personal information except to provide these services to Charter, and they are required to maintain the confidentiality of your
          information.
        </p>
        <p>
          Charter does not use or disclose sensitive personal information, such as race, religion, or political affiliations, without your explicit consent.
        </p>
        <p>
          Charter keeps track of the web sites and pages our customers visit within Charter, in order to determine what Charter services are the most popular.
          This data is used to deliver customized content and advertising within Charter’s Site to customers whose behavior indicates that they are interested
          in a particular subject area.
        </p>
        <p>
          Charter’s Site will only disclose your personal information, without notice, in connection with a court order, subpoena, government investigation,
          or as required or permitted by law.
        </p>

      {/*------ USE OF COOKIES ------ */}
        <h4>Use of your Personal Information</h4>
        <p>
          The Site uses “cookies” to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a Web page server.
          Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server
          in the domain that issued the cookie to you.
        </p>
        <p>
          One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that
          you have returned to a specific page. For example, if you personalize Site pages, or register with Charter’s Site or services, a cookie helps Charter
          to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing
          addresses, shipping addresses, and so on. When you return to the Site, the information you previously provided can be retrieved, so you can easily 
          use any Site features that you customized.
        </p>
        <p>
          You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting
          to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Sites        
        </p>
      {/*------ SECURITY OF YOUR PERSONAL INFORMATION ------ */}
        <h4>Security of your Personal Information</h4>
        <p>
          Charter takes reasonable industry standard precautions to keep the Site and its systems secure and to prevent personal information from being made
          available to unauthorized persons or entities. When personal information (such as name, email and phone number) is transmitted to the Site, it is
          protected through the use of encryption, such as the Secure Socket Layer (SSL) protocol. Despite instituting these standards, we cannot provide
          absolute assurances that the contents of messages and any confidential information you chose to send to us will be secure.
        </p>

        
        <hr/>
        <br />

      {/*------ CHILDREN'S PRIVACY ------ */}
        <h5>Children's Privacy</h5>
        <p>
          The Site is not intended for children under 18 years of age. We will never ask for or knowingly collect information from children and no part of
          the Site is intended to attract anyone under the age of 18. If you think we may have collected personal information from a child through the Site,
          please contact us so we can immediately delete any such information.
        </p>

      {/*------ CALIFORNIA PRIVACY RIGHTS ------ */}
        <h5>California Privacy Rights</h5>
        <p>
          Pursuant to California Civil Code Section 1798.83, users who are California residents can request certain information about the sharing of their
          own personal information with third parties for direct marketing purposes during the past year. The information which you have a right to
          receive includes the categories of personal information disclosed by us for direct marketing purposes during the preceding calendar year and
          the names of the companies that received such information. You are entitled to receive a copy of this information in a standardized format, and
          the information will not be specific to you individually. California residents can request this disclosure by sending a request to us using
          the contact information provided below. Please provide sufficient information to allow us to identify you in our records.
        </p>
        <p>
          Pursuant to the California Consumer Protection Act, (“CCPA”), California residents have additional rights with respect to their personal information.
          Please see our CCPA Notice for details.
        </p>

      {/*------ CHANGES ------ */}
        <h5>Changes to this Statement</h5>
        <p>
          Charter will occasionally update this Privacy Policy to reflect company and customer feedback. Charter encourages you to periodically review this
          Statement to be informed of how Charter is using your information
        </p>

        <br/>
      {/*------ CONTACT INFORMATION ------ */}
        <h6>Contact Information</h6>
        <p>
          Charter welcomes your comments regarding this Privacy Policy. If you believe that Charter has not adhered to this Privacy Policy please contact
          ______________. We will use commercially reasonable efforts to promptly determine and remedy the problem.
        </p>
        <br/>

      </section>
    </div>
  </Layout>
)

export default PrivacyPage