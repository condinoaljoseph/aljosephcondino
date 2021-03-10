import Logo from './Logo';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Signup from './Signup';

const Aside = () => {
	const router = useRouter();
	const isIndex = router.pathname === '/';

	return (
		<aside>
			{!isIndex && (
				<>
					<Signup />
					<div className="mb-7">
						<Logo />
					</div>
				</>
			)}
			<div className="flex mb-14 items-center text-lg">
				<Image
					src="https://pbs.twimg.com/profile_images/1369269303271288832/mYfh_SZK_400x400.jpg"
					alt="Al Joseph Condino"
					width={56}
					height={56}
					className=" rounded-full"
				/>
				<p className="ml-3.5 max-w-xs">
					Personal blog by{' '}
					<a
						className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
						href="https://twitter.com/condino_aj"
						target="_blank"
						rel="noopener"
					>
						Al Joseph Condino
					</a>
					.<span className="block">I explain with words and code.</span>
				</p>
			</div>
		</aside>
	);
};

export default Aside;
