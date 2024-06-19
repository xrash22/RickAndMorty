import React, { forwardRef, useState } from 'react';
import { Status } from '../../../services/types';
import useStore from '../../../store/store';
import { ClearButton, SaveButton } from './styles';
import { Checkbox, Modal, ModalRef, Text } from '../../atoms';
import { View } from 'react-native'

export const FilterModal = forwardRef<ModalRef>((props, ref) => {
  const updateStatusFilter = useStore((state) => state.updateStatusFilter)
  const clearStatusFilter = useStore((state) => state.clearStatusFilter)
  const prevStatus = useStore((state) => state.filters.status)
  const [filterStatus, setFilterStatus] = useState<Status | undefined>(prevStatus);
  const status = Object.values(Status);

  const onAddRemoveParam = (statusStr: Status) => {
    setFilterStatus(statusStr);
  };

  const clearFilters = () => {
    clearStatusFilter()
    setFilterStatus(undefined)
    ref?.current?.closeModal()
  }
  const applyFilter = () => {
    if (!filterStatus) return

    updateStatusFilter(filterStatus)
    ref?.current?.closeModal()
  }

  return (
    <Modal ref={ref}>
      <View style={{ flex: 1 }}>
        <Text textColor="black" center fontSize="xl" bold>
          Filter By
        </Text>
        <Text textColor="black">Status:</Text>
        {status.map(e => (
          <Checkbox
            checked={filterStatus === e}
            label={e}
            key={e}
            handleToggle={() => onAddRemoveParam(e)}
          />
        ))}
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }} >
          <ClearButton onPress={clearFilters} disabled={!prevStatus}>
            <Text textColor='black'>Romove Filters</Text>
          </ClearButton>
          <SaveButton onPress={applyFilter} disabled={!filterStatus}>
            <Text textColor='black'>Apply Filter</Text>
          </SaveButton>
        </View>
      </View>
    </Modal>
  );
});
