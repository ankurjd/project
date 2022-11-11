import React, {useRef, useState} from 'react';
import {Button, View} from 'react-native';
import {Canvas} from '@benjeau/react-native-draw';

const SketchCanvas = () => {
  const canvasRef = useRef(null);
  const [tool, setTool] = useState('brush');
  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };
  return (
    <View>
      <Canvas
       ref={canvasRef} 
       height={650}
        thickness={5}
         opacity={1}
         tool={tool}
         />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Button title="Undo" onPress={handleUndo} />
        <Button title="Clear" onPress={handleClear} />
      </View>
    </View>
  );
};

export default SketchCanvas;
