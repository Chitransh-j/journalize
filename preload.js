const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
	title: "Journalize",
	createNote: (data) => ipcRenderer.invoke('create-file', data)
})