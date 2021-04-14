import Image from 'next/image';

export default function Footer(): JSX.Element {
    return (
        <footer className="group flex-col w-full h-28 items-center mt-14 justify-center border-t border-solid border-gray-200">
            <div className="flex justify-center items-center mt-4 text-xl cursor-default">
                Made with &nbsp;
                <span className="group-hover:text-red-600" aria-label="heart" role="img">
                    ♥️
                </span>
                &nbsp; and decaf &nbsp;
                <span aria-label="coffee" role="img">
                    ☕️
                </span>
                &nbsp; in Spain, 2021™
            </div>
            <div className="flex justify-center items-center mt-4">
                <a
                    className="mr-3.5"
                    href="https://twitter.com/portovep"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src="/images/logos/twitter.svg"
                        alt="Twitter Logo"
                        width="20"
                        height="20"
                    />
                </a>

                <a
                    className="mr-3"
                    href="https://github.com/portovep"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src="/images/logos/github.svg"
                        alt="Github Logo"
                        width="20"
                        height="20"
                    />
                </a>

                <a
                    className="mr-3"
                    href="https://www.instagram.com/porto.vga"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src="/images/logos/instagram.svg"
                        alt="Instagram Logo"
                        width="20"
                        height="20"
                    />
                </a>

                <a
                    className="mr-3"
                    href="https://linkedin.com/in/pabloportoveloso"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src="/images/logos/linkedin.svg"
                        alt="Linkedin Logo"
                        width="28"
                        height="28"
                    />
                </a>
            </div>
        </footer>
    );
}
