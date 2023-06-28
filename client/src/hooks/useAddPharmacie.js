import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { addNewPharmacie } from '../services/apiPharmacies';

const useAddPharmacie = (user) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: addPharmacie, isLoading: addingPharmacieLoading } =
    useMutation({
      mutationFn: (data) => addNewPharmacie(data, user.token),
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
