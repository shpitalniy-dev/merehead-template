import React, { useEffect, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const ReCaptcha = ({ setCaptcha, captcha }) => {

  const recaptchaRef = useRef(null)

  const handleResetCaptcha = () => {
    recaptchaRef.current.reset()
  }
  const handleSetCaptcha = e => {
    setCaptcha(e)
  }
  useEffect(() => {
    if (captcha) return
    handleResetCaptcha()
  }, [captcha])

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey="6Ld7eL0ZAAAAAL0GhLGFQsJ4R3reGaDqNhnVFTaE"
      onChange={handleSetCaptcha}
    />
  )
}

export default ReCaptcha
