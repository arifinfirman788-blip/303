import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-secondary-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-400">
          <div>
            &copy; {new Date().getFullYear()} Hotel Intelligent Agent. All rights reserved.
          </div>
          <div className="text-secondary-300">
            内部汇报资料 · 请勿外传
          </div>
        </div>
      </div>
    </footer>
  );
}
