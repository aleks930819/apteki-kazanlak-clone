import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { createNewNews } from '../services/apiInteresting';

const useAddPromoProduct = (user) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: addNewNewsing, isLoading: addingNewNewsLoading } =
    useMutation({
      mutationFn: (data) => createNewNews(data, user.token),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['news'],
        });
        toast.success('Статията е добавен успешно!');
        navigate('/admin/interesno');
      },
      onError: (error) => toast.error(error.message),
    });

  return {
    addNewNewsing,
    addingNewNewsLoading,
  };
};

export default useAddPromoProduct;
