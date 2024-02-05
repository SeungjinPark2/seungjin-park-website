import Image from 'next/image';
import './content.scss';
import profile from '../../public/images/profile.jpg';

export default function Content() {
  return <div className='content-container'>
    <section>
      <div className="section-container">
        <div className="section-about-me">
          <div className="section-about-me-content">
            <h1>About me</h1>
            <p>
              {"Hi, I'm a blockchain full-stack developer from South Korea."}
            </p>
            <p>
              {"I was first introduced to blockchain while working at my first job, "}
              <i>
                <a href='https://www.dnsevercorp.com/'>Dnsever</a>
              </i>
              {", where I was exposed to various blockchains and was inspired by how different projects were trying to realize the value of decentralization.\n"}
            </p>
            <p>
              {"As a full-stack developer, I love to build all the brilliant ideas with my own hands."}
            </p>
            <p>
              {"For me, development is like the LEGOs I used to build as a kid, and I'm the kind of person who finds happiness in realizing these values :)"}
            </p>
          </div>
          <div className="img-container">
            <Image 
              src={profile}
              alt={"profile-image"}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="section-container">
        <div className="section-career">
          <h1>Career</h1>
          <div className="career-container">
            <div className="career-title">
              <div className="job-duration">2021.11~2022.12</div>
              <div className="job-company-name">Dnsever</div>
              <div className="job-duration"> fulltime worker</div>
            </div>
            <div className="career-explained">
              I had worked as <b>blockchain node operator</b> & <b>CEX system developer</b>.
              My main jobs were below.
              <h3 className="semi-career-title">Blockchain Node Operator</h3>
              <ul>
                <li>installing blockchain node (geth, bitcoind, algorand, xrp, etc)</li>
                <li>monitoring nodes to sync as latest as possible (grafana, prometheus)</li>
                <li>building fullstack web application to manage blockchain architecture</li>
              </ul>
              <h3 className="semi-career-title">CEX (centralized exchange) System Developer</h3>
              <ul>
                <li>integating with blockchain, writing block scanner / transaction preparer / offline signer / account creator / etc</li>
              </ul>
            </div>
          </div>
          <div className="career-container">
            <div className="career-title">
              <div className="job-duration">2023.01~2023.11</div>
              <div className="job-company-name">Dnsever</div>
              <div className="job-duration">parttime, remote worker</div>
            </div>
            <div className="career-explained">
              I had worked as free-lancer, <b>Blockchain Integrator</b>. 
              What I had to do was POC (proof of concept) of whether the client was possible to integrate with some blockchains.
              I researched SUI / APTOS / NEAR and eventually managed to integrate SUI and APTOS.
              These are announcements of listing on CEX.
              <ul>
                <li><a href="https://www.probit.com/en-us/hc/1000000280966-ProBit-Global-Lists-Sui-Network-SUI">www.probit.com/en-us/hc/1000000280966-ProBit-Global-Lists-Sui-Network-SUI</a></li>
                <li><a href="https://www.probit.com/en-us/hc/1000000839153-ProBit-Global-Lists-Aptos-APT">www.probit.com/en-us/hc/1000000839153-ProBit-Global-Lists-Aptos-APT</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="section-container">
        <div className="section-skills">
          <h1>Skills</h1>

          <div className="section-skill-container">
            <div className="section-skill-box">
              <h3 className="skill-title">front-end</h3>
              <ul>
                <li>
                  <span>
                    react
                  </span>
                  <div className="skill-bar">
                    <div className="skill-status-50"></div>
                  </div>
                </li>
                <li>
                  <span>
                    nextjs
                  </span>
                  <div className="skill-bar">
                    <div className="skill-status-25"></div>
                  </div>
                </li>
                <li>
                  <span>
                    sass
                  </span>
                  <div className="skill-bar">
                    <div className="skill-status-25"></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="section-skill-box">
              <h3 className="skill-title">back-end</h3>
              <ul>
                <li>
                  <span>express</span>
                  <div className="skill-bar">
                    <div className="skill-status-50"></div>
                  </div>
                </li>
                <li>
                  <span>postgresql</span>
                  <div className="skill-bar">
                    <div className="skill-status-75"></div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="section-skill-box">
              <h3 className="skill-title">blockchain</h3>
              <ul>
                <li>
                  <span>
                    solidity
                  </span>
                  <div className="skill-bar">
                    <div className="skill-status-50"></div>
                  </div>
                </li>
                <li>
                  <span>
                    web3.js
                  </span>
                  <div className="skill-bar">
                    <div className="skill-status-50"></div>
                  </div>
                </li>
                <li>
                  <span>
                    metamask
                  </span>
                  <div className="skill-bar">
                    <div className="skill-status-50"></div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="section-skill-box">
              <h3 className="skill-title">infra</h3>
              <ul>
                <li>
                  <span>
                    docker
                  </span>
                  <div className="skill-bar">
                    <div className="skill-status-75"></div>
                  </div>
                </li>
                <li>
                  <span>
                    nginx
                  </span>
                  <div className="skill-bar">
                    <div className="skill-status-25"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="section-container">
        My projects
      </div>
    </section>

    <section>
      <div className="section-container">
        contact me
      </div>
    </section>
  </div>;
}