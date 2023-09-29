import SocialIcon from './social-icons'
import FolderIcon from './icon'

const Card = ({ title, description, imgSrc, href, github, tech }: any) => (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
        <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-md hover:border-primary-500 hover:bg-gray-300 dark:border-gray-700 dark:hover:border-primary-500 dark:hover:bg-gray-800">
            <div className="p-6">
                <div className="flex flex-row items-center justify-between">
                    <div className="my-2">
                        <FolderIcon />
                    </div>
                    <div className="flex flex-row justify-between">
                        {href && (<div className="mx-1.5">
                            {<SocialIcon kind="external" href={href} size={6} />}
                        </div>)}
                        {github && (<div className="mx-1.5">
                            {<SocialIcon kind="github" href={github} size={6} />}
                        </div>)}
                    </div>
                </div>
                <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>

                <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
                <div className="flex flex-row justify-between">
                    <div className="text-sm text-gray-400">
                        {tech.map((t: string, i: number, arr:[]) => {
                            if(i + 1 === arr.length){ 
                                return `${t}`;
                            }

                            return `${t}  •`;
                        })} 
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Card