import Image from 'next/image';
import './content.scss';
import profile from '../../public/images/profile.jpg';

export default function Content() {
  return <div className='content-container'>
    <section>
      <div className="section-container">
        <div className="about-me">
          <div className="about-me-content">
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
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nam nulla cumque expedita nesciunt reiciendis pariatur alias distinctio tenetur necessitatibus, ducimus possimus voluptate. Aperiam impedit, facilis natus mollitia nesciunt veritatis.
      </div>
    </section>
  </div>;
}