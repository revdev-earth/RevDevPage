import { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { Portal, Background, PopUp } from "./styled"

interface IModal {
  children: React.ReactNode
  close: () => void
  width?: string | number
  maxWidth?: string | number
  height?: string | number
  maxHeight?: string | number
}

const CreatePortal = ({
  children,
  close,
  width,
  maxWidth,
  height,
  maxHeight,
}: IModal) => {
  // create the element for the modal state
  const container = useMemo(() => {
    const div = document.createElement("div") as HTMLDivElement
    return div
  }, [])

  // when clean the component
  useEffect(() => {
    const body = document.querySelector("body")
    if (body) body.style.overflow = "hidden"

    return () => {
      container && container.remove()
      if (body) body.style.overflow = ""
    }
  }, [container])

  const backgroundClick = () => {
    close()
  }

  return createPortal(
    <Portal>
      <Background onClick={backgroundClick} />
      <PopUp
        style={{
          width: width,
          maxWidth: maxWidth,
          height: height,
          maxHeight: maxHeight,
        }}
      >
        {children}
      </PopUp>
    </Portal>,
    document.body.appendChild(container)
  )
}

// Check if the Modal could be open, because require the existing body
export const Modal = (props: IModal) => {
  const [isLoaded, loaded] = useState(false)

  useEffect(() => {
    loaded(true)

    // remove and unload the component
    return () => {
      loaded(false)
    }
  }, [])

  return isLoaded ? <CreatePortal {...props} /> : null
}
