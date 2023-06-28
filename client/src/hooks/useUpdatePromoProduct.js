import { useQueryClient, useMutation } from '@tanstack/react-query';
import { updateProductById } from '../services/apiPromoProducts';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useUpdatePromoProduct = (id, user) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading: editingLoading, mutate: updateProduct } = useMutation({
    mutationFn: (data) => updateProductById(data, id, user.token),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['promoProducts'],
      });
      toast.success('Продуктът е променен успешно!');
      navigate('/admin/promo-products');
    },
    onError: (error) => toast.error(error.message),
  });

  return { updateProduct, editingLoading };
};

export default useUpdatePromoProduct;
