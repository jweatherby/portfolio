import React from 'react'

import './work.css'

export const ProjectsAndWork = () => {
    return (
        <div className='work-list'>
            <h2>Projects & Work</h2>
            <article className='work-item'>
                <div className='work-item__logo'>
                    <img src='/images/work/points-logo.jpg' />
                </div>
                <div className='work-item__info'>
                    <h4>
                        <a href='https://points.com' target='_blank'>
                            Points International
                        </a>
                    </h4>
                    <div>Aug 2019 - Present</div>
                    <div>Development Engineer</div>
                </div>
            </article>
            <article className='work-item'>
                <div className='work-item__logo'>
                    <img src='/images/work/g-logo.png' />
                </div>
                <div className='work-item__info'>
                    <h4>
                        <a href='https://www.gadventures.com' target='_blank'>
                            G Adventures
                        </a>
                    </h4>
                    <div>May 2015 - Apr 2019</div>
                    <div>Software Engineer</div>
                </div>
            </article>
            <article className='work-item'>
                <div className='work-item__logo'>
                    <img src='/images/work/koffeecup-logo.png' />
                </div>
                <div className='work-item__info'>
                    <h4>
                        <a href='https://koffeecup.net' target='_blank'>
                            KoffeeCup
                        </a>
                    </h4>
                    <div>Oct 2011 - Sep 2014</div>
                    <div>PHP Developer</div>
                </div>
            </article>
            <article className='work-item'>
                <div className='work-item__logo'>
                    <img src='/images/work/ibm-logo.png' />
                </div>
                <div className='work-item__info'>
                    <h4>
                        <a href='https://www.ibm.com/ca-en' target='_blank'>
                            IBM
                        </a>
                    </h4>
                    <div>May 2009 - Aug 2010</div>
                    <div>DB2 Build Team (Intern)</div>
                </div>
            </article>
        </div>
    )
}