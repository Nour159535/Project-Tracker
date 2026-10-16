import './Header.css';

function Header () {
    return (
        <>
        <div className="header-elements">
            <div className="left-side">
                <svg width="71" height="84" viewBox="0 0 71 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6_2)">
                    <path d="M62 11H9C5.68629 11 3 13.6863 3 17V77C3 80.3137 5.68629 83 9 83H62C65.3137 83 68 80.3137 68 77V17C68 13.6863 65.3137 11 62 11Z" fill="url(#paint0_linear_6_2)"/>
                    <path d="M62 12H9C6.23858 12 4 14.2386 4 17V77C4 79.7614 6.23858 82 9 82H62C64.7614 82 67 79.7614 67 77V17C67 14.2386 64.7614 12 62 12Z" stroke="#A095FF" strokeOpacity={0.45}/>
                    <path opacity="0.55" d="M22 10.5H28V8.5C28 5 30.9 2.5 34.5 2.5C38.1 2.5 41 5 41 8.5V10.5H48C50 10.5 51.5 12 51.5 14V19.5C51.5 21.5 50 23 48 23H22C20 23 18.5 21.5 18.5 19.5V14C18.5 12 20 10.5 22 10.5Z" fill="#5144B6"/>
                    <path d="M22 8H28V6.5C28 3 30.9 0.5 34.5 0.5C38.1 0.5 41 3 41 6.5V8H48C50 8 51 9.5 51 11.5V17C51 19 50 20 48 20H22C20 20 19 19 19 17V11.5C19 9.5 20 8 22 8Z" fill="url(#paint1_linear_6_2)" stroke="#6558C7" strokeWidth={1.5}/>
                    <path d="M34.5 9.1C35.7703 9.1 36.8 8.07026 36.8 6.8C36.8 5.52975 35.7703 4.5 34.5 4.5C33.2298 4.5 32.2 5.52975 32.2 6.8C32.2 8.07026 33.2298 9.1 34.5 9.1Z" fill="#34306F"/>
                    <path d="M16 39L20 43L27 34" stroke="#252879" strokeWidth={3.8} strokeLinecap={"round"} strokeLinejoin={"round"}/>
                    <path d="M34 39H52" stroke="#252879" strokeWidth={3.8} strokeLinecap={"round"} strokeLinejoin={"round"}/>
                    <path d="M16 60L20 64L27 55" stroke="#252879" strokeWidth={3.8} strokeLinecap={"round"} strokeLinejoin={"round"}/>
                    <path d="M35 60L41 66L53 53" stroke="#252879" strokeWidth={3.8} strokeLinecap={"round"} strokeLinejoin={"round"}/>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear_6_2" x1="3" y1="11" x2="74.625" y2="75.6615" gradientUnits="userSpaceOnUse">
                    <stop  stopColor={"#A397FF"}/>
                    <stop offset="0.5" stopColor={"#8075F5"}/>
                    <stop offset="1" stopColor={"#6B63E4"}/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_6_2" x1="19" y1="0.5" x2="19" y2="20" gradientUnits="userSpaceOnUse">
                    <stop  stopColor={"#B6ADFF"}/>
                    <stop offset="1"  stopColor={"#8379EF"}/>
                    </linearGradient>
                    <clipPath id="clip0_6_2">
                    <rect width="71" height="84" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <div className="tracker-project-text">
                    <h3>Project <span className="text-color">Tracker</span></h3>
                    <p>Plan • Track • Achieve</p>
                </div>
            </div>
            <div className="right-side">
                <svg width="81" height="104" viewBox="0 0 81 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8169 62.2842H65.0282L57.0423 99.9302C45.6338 104 36.1268 104 28.5211 99.9302L22.8169 62.2842ZM41.0704 61.2667L43.3521 26.6731H46.7746L44.493 61.2667H41.0704ZM43.3521 40.9175C14.831 40.9175 0 16.4985 0 6.32391C25.0986 5.30645 41.0704 18.5334 43.3521 40.9175ZM45.6338 33.7953C46.7746 10.3937 62.7465 -1.81577 78.7183 0.219152C82.1408 15.481 66.169 30.7429 45.6338 33.7953ZM44.493 57.1969C17.1127 59.2318 7.98592 42.9524 4.56338 35.8302C22.8169 33.7953 36.507 38.8826 44.493 57.1969ZM46.7746 51.0921C51.338 33.7953 66.169 27.6906 81 30.7429C75.2958 44.9874 62.7465 52.1096 46.7746 51.0921ZM13.6901 99.9302H71.8732V104H13.6901V99.9302Z" fill="#6758EF"/>
                </svg>
                <p className="caveat-text">Small steps<br /> make big<br/>progress</p>
            </div>
        </div>
        </>
    );
}

export default Header;