import React, {useState} from 'react';
import {Pressable, View} from 'react-native';

type RenderElement<Data> = (data: Data) => JSX.Element;

interface Props<T> {
  options: Array<T>;
  defaultSelectedId?: number;
  renderPreview: RenderElement<T>;
  // renderListItem: RenderElement<T>;
}

const Dropdown = <ListItem extends object>({
  options,
  defaultSelectedId,
  // renderListItem,
  renderPreview,
}: Props<ListItem>) => {
  const [selectedId, setSelectedId] = useState(defaultSelectedId || 0);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <View>
      {/* {isOpened && <View>{options.map(option => renderListItem(option))}</View>} */}

      <Pressable onPress={() => setIsOpened(true)}>
        {renderPreview(options[selectedId])}
      </Pressable>
    </View>
  );
};

export default Dropdown;
