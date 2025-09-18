import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

/**
 * A reusable loading spinner component
 * @param {Object} props - Component props
 * @param {boolean} [props.fullScreen=false] - Whether the loader should take up the full viewport
 * @param {string} [props.size='md'] - Size of the loader (sm, md, lg)
 * @param {string} [props.color='primary'] - Color of the loader (primary, white, dark)
 * @param {string} [props.className=''] - Additional CSS classes
 */
const Loader = ({ fullScreen = false, size = 'md', color = 'primary', className = '' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-2',
    lg: 'w-16 h-16 border-4',
  };

  const colorClasses = {
    primary: 'border-t-primary-500 border-r-transparent border-b-transparent border-l-transparent',
    white: 'border-t-white border-r-transparent border-b-transparent border-l-transparent',
    dark: 'border-t-gray-800 border-r-transparent border-b-transparent border-l-transparent',
  };

  const loader = (
    <div className={`relative ${sizeClasses[size] || sizeClasses.md} ${className}`}>
      <div
        className={`absolute inset-0 rounded-full border-solid ${
          colorClasses[color] || colorClasses.primary
        } animate-spin`}
      />
      <div
        className={`absolute inset-0 rounded-full border-solid ${
          color === 'white' ? 'border-white/20' : 'border-gray-200'
        } ${sizeClasses[size] || sizeClasses.md}`}
      />
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        {loader}
      </div>
    );
  }

  return loader;
};

Loader.propTypes = {
  fullScreen: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['primary', 'white', 'dark']),
  className: PropTypes.string,
};

export default Loader;
