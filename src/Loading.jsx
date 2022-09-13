import React from 'react';

function Loading() {
  return (
    <div className="px-10 py-56 md:py-40 ">
      <div className="w-full max-w-2xl p-4 mx-auto bg-white border border-blue-300 rounded-md shadow">
        <div className="flex space-x-4 animate-pulse">
          <div className="w-10 h-10 rounded-full bg-slate-400 md:h-28 md:w-28"></div>
          <div className="flex-1 py-2 space-y-5 md:space-y-10 md:py-5">
            <div className="w-20 h-4 rounded md:h-8 bg-slate-400"></div>
            <div className="space-y-5 md:space-y-10">
              <div className="grid grid-cols-3 gap-6">
                <div className="h-3 col-span-2 rounded md:h-5 bg-slate-400"></div>
                <div className="h-3 col-span-1 rounded md:h-5 bg-slate-400"></div>
              </div>
              <div className="h-1 rounded md:h-3 bg-slate-400"></div>
              <div className="md:h-1 h-0.5 bg-slate-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Loading;
