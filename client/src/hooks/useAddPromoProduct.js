import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { createNewPromoProduct } from '../services/apiPromoProducts';

const useAddPromoProduct = (user) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: addPromoProduct, isLoading: addingPromoProductLoading } =
    useMutation({
      mutationFn: (data) => createNewPromoProduct(data, user.token),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['promoProducts'],
        });
        toast.success('Продуктът е добавен успешно!');
        navigate('/admin/promo-products');
      },
      onError: (error) => toast.error(error.message),
    });

  return {
    addPromoProduct,
    addingPromoProductLoading,
  };
};

export default useAddPromoProduct;
