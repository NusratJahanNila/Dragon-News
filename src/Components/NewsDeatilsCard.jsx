import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const NewsDeatilsCard = ({ news }) => {
    const navigate = useNavigate();

    const { title, image_url, details, category_id } = news;
    return (
        <div className="max-w-3xl mx-auto mt-8 bg-base-100 rounded-2xl shadow-lg  overflow-hidden p-5 border border-base-200">
            {/* Thumbnail */}
            <figure>
                <img
                    src={image_url}
                    alt={title}
                    className="w-full h-[400px] object-cover"
                />
            </figure>

            {/* Content */}
            <div className="p-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">{title}</h1>
                <p className="text-gray-700 leading-relaxed">{details}</p>

                {/* Back button */}
                <div className="mt-8">
                    <button
                        onClick={() => navigate(`/category/${category_id}`)}
                        className="btn btn-secondary flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        All news in this category
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsDeatilsCard;