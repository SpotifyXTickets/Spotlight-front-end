import '@/app/globals.scss'
import '@/styles/pages/_settings.scss'

import { useState } from 'react'
import Image from 'next/image'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import DeleteModal from '@/components/DeleteModal'

import arrowIcon from '@/assets/icons/arrowSettings.svg'
import editIcon from '@/assets/icons/edit.svg'
import setIcon from '@/assets/icons/set.svg'
import pastIcon from '@/assets/icons/noteSettings.svg'
import deleteIcon from '@/assets/icons/delete.svg'

const settingsList = [
  { id: 1, icon: editIcon, title: 'Edit Playlists' },
  { id: 2, icon: setIcon, title: 'Set Preferences' },
  { id: 3, icon: pastIcon, title: 'Past Events' },
  { id: 4, icon: deleteIcon, title: 'Delete Account and Wipe Data' },
]

export default function Settings() {
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false)

  const handleDeleteClick = () => {
    setDeleteModalVisible(true)
  }

  const handleCloseModal = () => {
    setDeleteModalVisible(false)
  }

  return (
    <section className="settings">
      <div className={`${isDeleteModalVisible ? 'opacity-30' : ''}`}>
        <NavBar />
        <h2 className="settings__title">Settings</h2>
        <div className="settings__list">
          {settingsList.map((item) => (
            <div
              className="settings-item"
              key={item.id}
              onClick={handleDeleteClick}
            >
              <div className="settings-item__wrapper">
                <Image
                  className="settings-item__icon"
                  src={item.icon}
                  alt={item.title}
                />
                <span className="settings-item__title">{item.title}</span>
              </div>
              <Image src={arrowIcon} alt="arrow right" />
            </div>
          ))}
        </div>
        <Footer />
      </div>

      {isDeleteModalVisible && <DeleteModal onClose={handleCloseModal} />}
    </section>
  )
}
