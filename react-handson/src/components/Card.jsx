function Card({employee="Darshan", position="Jr Software Developer", imageURL="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"}) {
    return (
        <>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src={imageURL} alt="" width="384" height="512"/>
                    <div className="pt-6 md:p-8 text-center space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                                "Tailwind CSS is the only framework that I've seen scale
                                on large teams. It’s easy to customize, adapts to any design,
                                and the build size is tiny.""
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                {employee}
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                {position}
                            </div>
                        </figcaption>
                    </div>
            </figure>
        </>
    )
}

export default Card;