import { useState, useEffect } from 'react';
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
              {['background', 'operations', 'features', 'matrix'].map((id) => (
                <a 
                  key={id}
                  href={`#${id}`} 
                  className="relative group px-3 py-2 text-sm font-medium transition-colors text-secondary-700 hover:text-primary-600"
                >
                  {id === 'background' ? '项目背景' : 
                   id === 'operations' ? '运营情况' : 
                   id === 'features' ? '产品特点' : '智能体矩阵'}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
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
