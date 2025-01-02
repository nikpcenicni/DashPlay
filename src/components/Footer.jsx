import PropTypes from 'prop-types'

const Footer = ({ company }) => {
  return (
    <footer className="absolute bottom-4 left-0 right-0 text-center">
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        <a 
          href={company.website} 
          className="hover:text-gray-700 dark:hover:text-gray-300"
          rel="noopener noreferrer"
        >
          {company.copyright}
        </a>
        {' • '}
        <a 
          href="https://github.com/nikpcenicni/Tesla-Theatre"
          className="hover:text-gray-700 dark:hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {company.sourceCode}
        </a>
      </p>
    </footer>
  )
}

Footer.propTypes = {
  company: PropTypes.shape({
    website: PropTypes.string.isRequired,
    copyright: PropTypes.string.isRequired,
    sourceCode: PropTypes.string.isRequired // Add this new prop validation
  }).isRequired
}

export default Footer