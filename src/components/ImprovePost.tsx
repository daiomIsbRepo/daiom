import { Image, ChevronDown, HelpCircle } from 'lucide-react';
import { images } from '../assets/images';

const ImprovePost = () => {
  return (
    <div className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Generate Post</h1>
        <div className="flex items-center gap-4">
          <HelpCircle className="w-6 h-6 text-[#145659] cursor-pointer" />
          <select className="px-4 py-2 border rounded-lg">
            <option>English</option>
          </select>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Give a title hint for your post..."
          className="w-full px-6 py-4 border rounded-lg mb-6"
        />

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <img
              src={images.profileDefault}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">Profile</h3>
              <p className="text-sm text-gray-500">1m • 🌐</p>
            </div>
          </div>
          
          <p className="mb-4">Your Post will be generated here !</p>
          
          <div className="flex items-center gap-2 mb-4">
            <span>👍❤️</span>
            <span className="text-sm text-gray-600">buzzli and 100 others</span>
          </div>
          
          <div className="flex justify-between border-t pt-3">
            <button className="flex items-center gap-2 text-gray-600">
              <span className="text-lg">👍</span> Like
            </button>
            <button className="flex items-center gap-2 text-gray-600">
              <span className="text-lg">💬</span> Comment
            </button>
            <button className="flex items-center gap-2 text-gray-600">
              <span className="text-lg">🔄</span> Repost
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Language</label>
            <div className="relative">
              <select className="w-full px-4 py-2 border rounded-lg appearance-none">
                <option>English</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Words Count</label>
            <div className="relative">
              <select className="w-full px-4 py-2 border rounded-lg appearance-none">
                <option>Not Applicable</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <button className="w-full px-4 py-2 border rounded-lg text-left flex justify-between items-center">
              <span>Advanced Options</span>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="border-2 border-dashed rounded-lg p-8 mb-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-500">Browse</p>
            <p className="text-gray-500">or</p>
            <p className="text-gray-500">Drag and drop your media here</p>
          </div>
        </div>

        <input
          type="text"
          placeholder="Extra Image details (optional)"
          className="w-full px-4 py-2 border rounded-lg mb-6"
        />

        <div className="flex items-center gap-4 mb-6">
          <button className="px-6 py-2 bg-[#145659] text-white rounded-full hover:bg-[#0d3d3f] flex items-center gap-2">
            <Image className="w-5 h-5" />
            GENERATE RELATED IMAGE USING DALL·E
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="emojis" className="rounded" />
            <label htmlFor="emojis">Include Emojis</label>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 border rounded-full hover:bg-gray-50">
              SAVE TO DRAFT
            </button>
            <button className="px-6 py-2 border rounded-full hover:bg-gray-50">
              SCHEDULE POST
            </button>
            <button className="px-6 py-2 bg-[#145659] text-white rounded-full hover:bg-[#0d3d3f]">
              POST ON LINKEDIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovePost;