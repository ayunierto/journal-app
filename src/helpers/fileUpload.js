export const fileUpload = async( file ) => {

    if ( !file ) throw new Error('file not found')

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dxldxozbg/upload'

    const formData = new FormData()
    formData.append('upload_preset', 'react-journal')
    formData.append( 'file', file )

    try {
        
        const resp = await fetch( cloudUrl, {
            method: "POST",
            body: formData
        } )

        console.log( resp )
        const cloudResp = await resp.json()
        console.log(cloudResp)
        return cloudResp.secure_url

    } catch (error) {
        console.log( error )
        throw new Error( error.message )
    }
}