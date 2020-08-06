import React from "react";
import './patient-path.css';
//timeline library imports
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const PatientPath = () => {

  return (
    <div className='timeline'>
        <h2>Typical Patient Path</h2>
        <VerticalTimeline className='vertical-timeline vertical-timeline--animate vertical-timeline--two-columns'>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'var(--light-clinic-blue)', color: 'var(--heading-color)', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.12)'}}
                contentArrowStyle={{ borderRight: '7px solid var(--light-clinic-blue)' }}
                iconStyle={{ background: 'var(--heading-color)'}}
            >
                <h3 className="vertical-timeline-element-title">Hospital</h3>
                <h4 className="vertical-timeline-element-subtitle">Patient Discharged</h4>
                <p>Patient is released from the hospital and referred to Charter Healthcare Group.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'var(--light-clinic-blue)', color: 'var(--heading-color)', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.12)'}}
                date="0-90 days"
                iconStyle={{ background: 'var(--heading-color)'}}
            >
                <h3 className="vertical-timeline-element-title">{'Option 1.)'}</h3>
                <h4 className="vertical-timeline-element-subtitle">Home Health</h4>
                <p>Patients may participate in our Home Health program, which offers a wide range of health care services delivered in the convenience and privacy of their home by specially trained healthcare professionals. It can help shorten or avoid extended hospital and skilled nursing facility stays.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'var(--light-clinic-blue)', color: 'var(--heading-color)', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.12)'}}
                date="0-2 years"
                iconStyle={{ background: 'var(--heading-color)'}}
            >
                <h3 className="vertical-timeline-element-title">{'Option 2.)'}</h3>
                <h4 className="vertical-timeline-element-subtitle">Palliative Care</h4>
                <p>Palliative care is a comprehensive care program especially designed for individuals experiencing physical symptoms and emotional distress related to serious illnesses. Our program works together with your primary treatment plan to help prevent and ease your discomfort as well as improve your quality of life.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'var(--light-clinic-blue)', color: 'var(--heading-color)', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.12)'}}
                date="0-120 days"
                iconStyle={{ background: 'var(--heading-color)'}}
            >
                <h3 className="vertical-timeline-element-title">{'Option 3.)'}</h3>
                <h4 className="vertical-timeline-element-subtitle">H.A.R.P.</h4>
                <p>Our Hospital Admission Reduction Program (HARP) consists of Transitional Care Management (TCM), Advanced Care Planning (ACP). TCM is a program to help patients transition from inpatient care settings to their home. ACP is a program to ensure that you select a health care agent that you trust and feel comfortable with and receive the treatment you want when you can no longer make those decisions for yourself.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'var(--light-clinic-blue)', color: 'var(--heading-color)', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.12)'}}
                date="6 months - 1 year"
                iconStyle={{ background: 'var(--heading-color)'}}
            >
                <h3 className="vertical-timeline-element-title">{'Option 4.)'}</h3>
                <h4 className="vertical-timeline-element-subtitle">Hospice</h4>
                <p>Hospice is a special way of caring for people who have a life limiting illness. The hospice program allows us to provide the physical, emotional, and spiritual support that you and your family need during this time.</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    )
  }

export default PatientPath;