import getConfig from 'next/config'
import CopyleftIcon from './CopyleftIcon'

const Footer: React.FunctionComponent = () => {
  const { publicRuntimeConfig } = getConfig()
  const { modifiedDate, modifiedYear } = publicRuntimeConfig
  return (
    <div className="max-w-3xl mx-auto flex py-4 items-center">
      <div className="px-2 lg:px-4">
        <CopyleftIcon width={20} height={20} />
      </div>
      <div className="pl-1 pr-2 lg:pr-4 font-sans text-xs">
        <p>
          {modifiedYear} Conky developers, updated {new Date(modifiedDate).toLocaleString()}
        </p>
      </div>
    </div>
  )
}

export default Footer
