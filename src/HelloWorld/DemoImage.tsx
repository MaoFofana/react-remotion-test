import React, {useEffect, useState} from 'react';
import {useCurrentFrame} from 'remotion';



// @ts-ignore
export const DemoImage = () => {
	const frame = useCurrentFrame();
	const [id, setId] = useState(1)
  useEffect(()=>{
   const time =	setTimeout(()=>{
				if(id < 26){
					setId(id + 1)
				}
		}, 500)

		return ()=> clearTimeout(time)
	}, [id])
	return (
		<div style={{textAlign  : "center", backgroundColor : "#003F87", width : "100%"}}>
			<img src={require('../demo/' + id + '.jpeg')} style={{marginLeft : 12}} />
		</div>

	)
}