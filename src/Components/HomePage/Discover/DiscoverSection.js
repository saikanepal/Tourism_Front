import React from 'react';

const DiscoverSection = () => {
    return (
        <section className="relative pt-12 bg-blueGray-50">
            <div className="items-center flex flex-wrap">
                <div className="w-[403px] h-[424px]">
                    <img alt="image" className="max-w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" />
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12">
                        <h3 className="text-3xl font-semibold">A growing company</h3>
                        <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                            The extension comes with three pre-built pages to help you get
                            started faster. You can change the text and images and you're
                            good to go.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;
