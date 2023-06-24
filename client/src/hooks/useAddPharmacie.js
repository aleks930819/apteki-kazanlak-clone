import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { addNewPharmacie } from '../services/apiPharmacies';

const useAddPharmacie = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: addPharmacie, isLoading: addingPharmacieLoading } =
    useMutation({
      mutationFn: addNewPharmacie,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['pharmacies'],
        });
        toast.success('Аптеката е добавена успешно!');
        navigate('/admin/pharmacies');
      },
      onError: (error) => toast.error(error.message),
    });

  return {
    addPharmacie,
    addingPharmacieLoading,
  };
};

export default useAddPharmacie;
