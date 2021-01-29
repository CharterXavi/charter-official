import './terms-and-conditions.css';

import Layout from "../../components/layout";
import React from "react";
import SEO from "../../components/seo";

const TermsPage = () => (
  <Layout>
    <SEO title="Terms & Conditions" />
    <div className='TermsPage'>
      <section className='two-column'>
        <h4 className='detail-title'>DISCLAIMER</h4>
        <p className='detail-text'>
          Charter maintains this website (“Site”) as a health information resource for educational and informational purposes. It is not provided
          as a professional service or as medical advice for specific conditions, but rather provides general information about certain services.
          It is not a substitute for professional medical advice and as shall not be construed to be a medical advice under any circumstances. If
          you have, or suspect you may have, a health condition, you should consult your health care provider for specific medical advice.
        </p>
        <p className='detail-text'>
          This Site provides links to other health care resources that we make available simply as a convenience to our visitors. We do not control
          or endorse any such other sites, or any products or services sold on such other sites, and disclaim any responsibility for the content of
          such third party sites. Any reference to specific products or services on such other sites does not constitute or imply recommendation or
          endorsement by Charter. Users of this site assume full responsibility for their use of the information obtained from this site and understand
          and agree that Charter is not responsible or liable for any claim, loss or damage arising from the use of the information.
        </p>
        <hr/>
        <br/>

      {/*------ COLLECTION OF INFORMATION ------ */}
        <h1>Terms of Use</h1>
        <p>
          Please note that these Terms of Use and policies only apply to the Charter’s site. Charter provides links to third-party websites that
          are not operated by Charter. Charter users who link to a third-party web site must recognize that our Terms of Use and other policies do
          not extend beyond the borders of the Charter Site. Other standards and policies may apply outside our Site. We encourage you to read the
          terms of use, privacy policies and other policies which apply to these third-party websites before using them. 
        </p>
        
        <ol>
        {/* ------------- SERVICES AVAILABLE THROUGH THE SITE ------------- */}
          <li>
            <h6>Services Available Through the Site</h6>
            <p>
              A variety of information and communication services are made acailable through the site, including:
              <ul>
                <li>Educational information, including links to informative third-party websites.</li>
                <li>Information and news about Charter’s services and employment opportunities.</li>
                <li>Online search and application for career and employment opportunities with Charter.</li>
                <li>Information about Charter’s point of care options.</li>
              </ul>
            </p>
          </li>

        {/* ------------- PERSONAL INFORMATION COLLECTION AND USE ------------- */}
          <li>
            <h6>Personal Information Collection and Use</h6>
            <p>
              Charter understands that the privacy of your personal information is important. For information about cases in which personal information
              may be collected by Charter, and details about how that personal information is collected and used by Charter, please review our Privacy
              Policy. Please note that personal information collected by our clinical staff is subject to separate notices of privacy practices. You can
              find the Notice of Privacy Practices on the site.
            </p>
          </li>

        {/* -------------  USER RESPONSIBILITIES ------------- */}
          <li>
            <h6>User Responsibilities</h6>
            <p>
              The Charter site is intended to help you be a better-informed health care services and get access to Charter information and services
              easily, but we need your help to make it work well. You acknowledge that you must be 18 years or older to provide personal information
              to Charter through the Charter site, and you represent that you are 18 years or older if you do so. We also need you to be responsible
              for doing your part to protect your personal information, and to understand that the educational information, tools and materials made
              available through the Charter site are not and do not include medical advice, and are not designed or intended to address your personal
              health condition or issues. Users therefore must be responsible for the following:
              <ul>

                <li>
                  <strong>Be an Informed User</strong>
                  <ul>
                    <li>
                      <p>
                        Please read these Terms of Use carefully. We need your help in making the Charter Site a safe and effective tool and protecting
                        it against misuse.
                      </p>
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Maintain and Protect Your Own Equipment</strong>
                  <ul>
                    <li>
                      <p>
                        The Charter Site is intended to be accessible and all content available through all standard commercial web browsers operating
                        on standard personal computers, through standard commercially-available Internet access. The quality of content presentation
                        and download speeds may vary depending on the software, equipment and internet connections used.
                      </p>
                    </li>
                    <li>
                      <p>
                        You may be able to use devices other than a personal computer to access the Charter Site, such as some personal digital assistants,
                        cell phones or other devices. If you do choose to use another kind of device to access the Charter site, you must be responsible
                        for protecting it in accordance with these Terms of Use. Any requirement for personal computer protection in these Terms of Use
                        applies equally to any other device you may use to access the Charter site.
                      </p>
                    </li>
                    <li>
                      <p>
                        Charter does not provide any software, equipment or internet connections. You are solely responsible for providing all software,
                        computer equipment and other hardware, and internet connections necessary to access the site.
                      </p>
                    </li>
                    <li>
                      <p>
                        Some features on the Charter site allow you to submit an application for employment. Your personal computer may store information
                        you provide to Charter through its site. You may also download information from the Charter site to your personal computer or other
                        devices. If someone else uses your personal computer or other devices, they may be able to gain access to your personal information.
                        Charter cannot prevent or be responsible for protecting your personal computer or other devices against unauthorized use. You are
                        solely responsible for protecting the personal computers or other devices you use against unauthorized use to access your account.
                      </p>
                    </li>
                    <li>
                      <p>
                        If you use a personal computer or other device provided by or shared with your employer, parent, spouse, roommate or other person,
                        that other party may have the legal right to view all information stored on it. Charter cannot prevent or be responsible for such
                        activities. If you use a personal computer or other device that another person has the legal right to control, you access your
                        Charter account at your own risk.
                      </p>
                    </li>
                    <li>
                      <p>
                        Whenever you are done using the Charter site you should exit the site, and you should not leave your computer or other device unattended
                        when it is on the Charter site and someone else may be able to view the screen or use the computer or other device. If you leave
                        the Charter site open when someone else can see your computer screen or use your personal computer or other device, they may be able
                        to gain access to your personal information. Charter cannot log you off your personal computer or protect your personal computer
                        against unauthorized access. You are solely responsible for protecting the personal computers or other devices you use against
                        unauthorized use to access your account.
                      </p>
                    </li>
                    <li>
                      <p>
                        Computer viruses, worms, spyware and other malicious software on your computer can be used to gather personal information from that
                        computer, often without the user’s knowledge. Charter cannot prevent or be responsible for detecting or removing malicious software
                        on computers you use to access the Charter site. You should maintain and regularly use current antivirus and antispyware software
                        on any personal computer you use to access the Charter site.
                      </p>
                    </li>
                    <li>
                      <p>
                        Unauthorized individuals (“hackers”) and malicious software can sometimes gain access to computers through internet connections, unless
                        the computer has a working firewall. Unauthorized access of this kind may not be easily detected and may allow passwords and personal
                        information to be gathered without the computer user’s knowledge. Charter does not provide and cannot be responsible for implementing a
                        firewall for your computer. Firewall software is standard on many personal computers and affordable firewall software for personal
                        computers is readily available. You should maintain a working firewall on any computer you use to access the Charter site.
                      </p>
                    </li>
                    <li>
                      <p>
                        Computer criminals may sometimes send e-mails that appear to come from legitimate organizations. These e-mails typically ask you to log
                        on to a web site using a link in the e-mail, and enter some personal information to “verify,” “correct” or “update” your account, or
                        something similar. This practice is known as “phishing,” and is intended to get personal information from unwary users to use for identity
                        theft and other fraud.
                      </p>
                      <p className='detail-title'>
                        IN ORDER TO HELP AVOID THE THREAT OF PHISHING, CHARTER WILL NEVER SEND YOU UNSOLICITED E-MAILS THAT INCLUDE A LINK TO CHARTER’S SITE
                        WHERE YOU WILL BE ASKED TO PROVIDE PERSONAL INFORMATION. IF YOU RECEIVE AN E-MAIL THAT CLAIMS TO BE FROM CHARTER WHICH INCLUDES A LINK
                        TO A WEB SITE WHICH APPEARS TO BE OPERATED BY CHARTER, OR BY ANY PARTY ON BEHALF OF CHARTER, AND WHICH ASKS YOU TO PROVIDE PERSONAL
                        INFORMATION, PLEASE DO NOT PROVIDE THAT PERSONAL INFORMATION.
                      </p>
                      <p>
                        If you receive any suspicious e-mail which claims or appears to be from Charter, please notify us by calling the Charter’s Hotline
                        at ________________.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
            <p>
              <ol type='A'>
                <li>
                  <p style={{textDecoration: 'underline'}}>Do Not Provide Third Party Services.</p>
                  <p>
                    You are not permitted to use the Charter site to provide or support informational, educational, messaging or other services to other parties.
                    The information and services made available by and through the Charter site are for personal use only.
                  </p>
                </li>
                <li>
                  <p style={{textDecoration: 'underline'}}>Do Not Distribute Copyrighted Materials for Commercial Use.</p>
                  <p>
                    Most of the information and materials made available by and through the Charter site is copyrighted and owned by Charter or other parties.
                    You may use this information and materials for your own personal use, and may make limited use of it to the extent permitted by applicable
                    law. You may not sell or modify any information or materials obtained from Charter or reproduce, display, distribute, or otherwise use it
                    in any way for any public or commercial purpose. Use of information or materials obtained from Charter on any other web site is prohibited.
                    You must retain all copyright and other proprietary notices contained in the original information or materials on any copy you make of
                    such material.
                  </p>
                </li>
                <li>
                  <p style={{textDecoration: 'underline'}}>Do Not Abuse Services.</p>
                  <p>
                    The Charter site is provided for your convenience and educational use. In order to keep these services working efficiently and appropriately,
                    you are not permitted to:
                  </p>
                  <p>
                    <ol type='i'>
                      <li>
                        Use the Charter site in any way that could damage, disable, overburder, or impair the Charter site or interfere with any other party's
                        use of the Charter site.
                      </li>
                      <li>
                        Attempt to gain unauthorized access to any information, documents, records, accounts, devices, systems or networks connected to Charter
                        through hacking, password cracking, IP spoofing or any other means.
                      </li>
                      <li>
                        Restrict or inhibit anyone else from using the Charter site.
                      </li>
                      <li>
                        Harvest or otherwise collect information about other individuals, including e-mail addresses and personal information.
                      </li>
                      <li>
                        Link to, frame or use any trademark, logo or other proprietary information on the Charter site without Charter’s express written permission.
                      </li>
                    </ol>
                  </p>
                </li>
              </ol>
            </p>
          </li>

        {/* ------------- HEALTH AND MEDICAL EDUCATIONAL INFORMATION ------------- */}
          <li>
            <h6>Health and Medical Educational Information</h6>
            <p>
              The Charter site is used to publish information and tools about health issues and general medical care options to help educate users and increase
              public awareness. Some of these tools and information are provided by parties other than Charter, and Charter may provide links to third-party websites
              or incorporate such tools and information into the Charter site for this purpose.  
            </p>
            <p>
              <ol type='A'>
                <li>
                  <p style={{textDecoration: 'underline'}}>Do Not Abuse Services.</p>
                  <p>
                    Information and links to informational web sites provided by or through Charter are for educational purposes only or for the purpose of providing
                    information about point of care options. You are responsible for your understanding and use of all information.
                  </p>
                  <p className='detail-title'>
                    INFORMATION PROVIDED BY OR THROUGH CHARTER IS NOT DIAGNOSTIC, MEDICAL ADVICE OR A SUBSTITUTE FOR MEDICAL ADVICE. IF YOU ARE SEEKING INFORMATION
                    BECAUSE YOU BELIEVE YOU OR ANOTHER PERSON HAS HAVE A SPECIFIC MEDICAL CONDITION PLEASE CONTACT YOUR HEALTH CARE PROVIDER. IF YOU HAVE REASON TO
                    BELIEVE THERE IS A MEDICAL EMERGENCY PLEASE CALL “911” OR YOUR OTHER APPLICABLE EMERGENCY NUMBER AT ONCE. YOU SHOULD ALWAYS SEEK THE ADVICE OF
                    YOUR HEALTHCARE PROVIDER WITH ANY QUESTIONS YOU MAY HAVE REGARDING A MEDICAL CONDITION. YOU SHOULD NEVER DISREGARD THE ADVICE OF A HEALTHCARE
                    PROVIDER OR CANCEL AN APPOINTMENT WITH A HEALTHCARE PROVIDER BECAUSE YOU ARE RELYING ON INFORMATION YOU HAVE READ ON THE CHARTER SITE.
                  </p>
                  <p>
                    While Charter seeks to provide information, which may be helpful in understanding your own health care needs and issues, none of the educational
                    information available through the Charter site was or will be developed for you personally. If you want or need information related to your personal
                    health condition, please contact your health care provider.
                  </p>
                </li> 
                <li>
                  <p style={{textDecoration: 'underline'}}>Information and Links are Not Necessarily Endorsed.</p>
                  <p>
                    The fact that information is published or a is link provided by Charter does not mean that the views and opinions expressed therein are necessarily
                    shared by Charter. 
                  </p>
                </li> 
                <li>
                  <p style={{textDecoration: 'underline'}}>Information is Not Guaranteed.</p>
                  <p>
                    While Charter seeks to provide useful, high-quality information and tools through the Charter site, Charter cannot guarantee that any information
                    is accurate, complete, current, error-free, or free of viruses, worms or other malicious software. Information and tools are provided “as is,”
                    without warranties of any kind, express or implied, including but not limited to warranties of fitness and suitability for any particular purpose.
                  </p>
                </li> 
                <li>
                  <p style={{textDecoration: 'underline'}}>Linked Websites Are Not Endorsed.</p>
                  <p>
                    Charter seeks to link only to trustworthy, valuable web sites, but provides web site links for your convenience only. A link to a web site does not
                    constitute an endorsement of the linked site, its content, or any party affiliated with the linked web site. Charter makes no warranties or
                    representations, express or implied, about the accuracy, completeness, currency, relevance, appropriateness, or availability of any linked site,
                    the information contained in them, or any products or services they offer. Charter shall not be liable, directly or indirectly, for any damages,
                    losses or harm incurred in connection with the use of a linked Web site.
                  </p>
                </li> 
              </ol>
            </p>                
          </li>

        {/* -------------  JURISDICTIONAL LIMITATION OF USE ------------- */}
          <li>
            <h6>Jurisdictional Limitation of Use</h6>
            <p>
              The Charter site originates and is intended for use in the United States. Charter does not claim that any information or materials on this site are
              appropriate or may be used outside of the United States. Access to information or materials may not be legal by certain persons or in certain countries.
              If you access the site from outside the United States, you do so at your own risk and are responsible for compliance with the laws of your jurisdiction.
            </p>
          </li>

        {/* -------------  CHANGES TO TERMS OF USE ------------- */}
          <li>
            <h6>Changes to Terms of Use</h6>
            <p>
              Charter reserves the right to change these Terms of Use from time to time. By posting an updated version on the site so that you are always aware of
              our terms and use. We urge you occasionally check the site for any updates. All changes will be effective when published unless a different effective
              date is specified. Your continued use of the Charter’s site after we have posted a change to these Terms of Use will be considered your consent to the
              change.
            </p>
          </li>

        {/* -------------  SERVICES AVAILABILITY AND LIMITATIONS ------------- */}
          <li>
            <h6>Services Availability and Limitations</h6>
            <p>
              Charter will attempt to keep Charter’s site available at all times, but availability may be interrupted from time to time for maintenance, repair,
              upgrade or other activities, due to technical problems, or due to natural disaster or other emergency. Charter is not responsible for and cannot control
              the availability of third-party communications services necessary to connect to the Charter site.
            </p>
          </li>

        {/* -------------  DIGITAL MILLENNIUM COPYRIGHT ACT PROVISIONS ------------- */}
          <li>
            <h6>Digital Millennium Copyright Act Provisions</h6>
            <p>
              Owners of copyrighted works who believe that their rights under U.S. copyright law have been infringed by a use of Charter may report an alleged infringement
              to Charter by following the relevant provisions of the Digital Millennium Copyright Act of 1998 (the "DMCA") rights, by sending Charter’s authorized agent
              a notification of alleged infringement that satisfies the requirements of the DMCA. Upon receipt of a satisfactory notice of alleged infringement Charter
              will promptly investigate the allegations, and respond appropriately, including removal of or blocking access to allegedly infringing content.
            </p>
            <p>
              <ol type='A'>
                <li>
                  <p>
                    If you are affected by the removal or blocking of allegedly infringing content which you in good faith believe has been removed or blocked in error,
                    you may send a counter notification to Charter. Upon Charter’s receipt of a counter-notification that satisfies the requirements of DMCA, Charter
                    will provide a copy of the counter notification to the person who sent the original notification of alleged infringement and will follow the DMCA's
                    procedures with respect to a received counter notification.
                  </p>
                </li>
                <li>
                  <p>
                    DMCA notifications of alleged infringement and counter-notifications may be sent to Charter Healthcare, Department of Legal Affairs, 9660 Haven Ave.,
                    Suite 203, Rancho Cucamonga, CA 91730.
                  </p>
                </li>
                <li>
                  <p>
                    Charter will not be a party to any disputes or lawsuits regarding alleged copyright infringement.
                  </p>
                </li>
              </ol>
            </p>
          </li>

        {/* ------------- LIMITATION OF LIABILITY ------------- */}
          <li>
            <h6>Limitation of Liability</h6>
            <p>
              TO THE GREATEST EXTENT PERMITTED BY LAW, CHARTER’S LIABILITY TO ANY PERSON FOR ANY CLAIMS, LOSSES, DAMAGES, HARM OR COSTS ARISING FROM OR PERTAINING TO
              THE USE, OPERATION OR FUNCTIONING OF THE CHARTER SITE, WHETHER ARISING FROM OR PERTAINING TO BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), WARRANTY
              OR ANY OTHER LEGAL THEORY, SHALL BE LIMITED TO THE PERSON’S DIRECT MONETARY DAMAGES AND SHALL NOT INCLUDE ANY INDIRECT, SPECIAL, INCIDENTAL, NON-ECONOMIC,
              CONSEQUENTIAL, PUNITIVE OR EXEMPLARY DAMAGES (INCLUDING BUT NOT LIMITED TO DAMAGES RELATED TO DELAYS, LOSS OF DATA, INTERRUPTION OF SERVICE, LOSS OF PRIVACY,
              REPUTATIONAL OR PHYSICAL HARM), EVEN IF CHARTER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </li>

        {/* -------------  DISPUTE RESOLUTION ------------- */}
          <li>
            <h6>Dispute Resolution</h6>
            <p>
              These Terms of Use shall be interpreted consistently with federal law applicable to the parties, including but not limited to HIPAA, provided that state
              law issues shall be exclusively interpreted according to the laws of the State of Delaware, without regard to choice of law principles. Jurisdiction and
              venue for any dispute arising from or pertaining to these Terms of Use shall be in the Circuit Court of the State of Delaware or the U.S. District Court
              for the District of Delaware.
            </p>
            <p>
              If any provision of these Terms of Use is found to be invalid by any court having competent jurisdiction, the invalidity of such provision shall not affect
              the validity of the remaining provisions of these Terms of Use, which shall remain in full force and effect. No waiver of any of these Terms of Use shall
              be deemed a further or continuing waiver of such term or any other term.
            </p>
          </li>

        {/* -------------  CONTACT INFORMATION ------------- */}
          <li>
            <h6>Contact Information</h6>
            <p>
              Charter Healthcare
              <br/>
              9660 Haven Ave, Suite 203
              <br/>
              Rancho Cucamonga, CA 91730
            </p>
          </li>
        </ol>


      </section>
    </div>
  </Layout>
)

export default TermsPage;