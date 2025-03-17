import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({loading, color='white', size=20 }) => {

    const override = {
        display: 'block',
        margin: '0 auto'
    }
  return (
    <>
        <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={size}

      />
    </>
  )
}

export default Spinner;