import React, { useState, useEffect } from 'react';
import { Menu, X, Hotel } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-primary-500 p-2 rounded-lg text-white">
              <Hotel size={24} />
            </div>
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-secondary-900' : 'text-secondary-900'}`}>
              酒店智能体
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#background" className="hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">项目背景</a>
              <a href="#operations" className="hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">运营情况</a>
              <a href="#features" className="hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">产品特点</a>
              <a href="#matrix" className="hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">智能体矩阵</a>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-primary-500/30">
                查看报告
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-600 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#background" className="block hover:bg-primary-50 px-3 py-2 rounded-md text-base font-medium text-secondary-700">项目背景</a>
            <a href="#operations" className="block hover:bg-primary-50 px-3 py-2 rounded-md text-base font-medium text-secondary-700">运营情况</a>
            <a href="#features" className="block hover:bg-primary-50 px-3 py-2 rounded-md text-base font-medium text-secondary-700">产品特点</a>
            <a href="#matrix" className="block hover:bg-primary-50 px-3 py-2 rounded-md text-base font-medium text-secondary-700">智能体矩阵</a>
          </div>
        </div>
      )}
    </nav>
  );
}
